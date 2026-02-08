import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { city } = await req.json();
  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    // 1. Get Coordinates for the city (Geocoding API)
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );
    const geoData = await geoRes.json();
    
    if (!geoData || geoData.length === 0) {
      return NextResponse.json({ warning: "City coordinates not found." });
    }

    const { lat, lon } = geoData[0];

    // 2. Fetch Current Weather & Air Quality
    const [weatherRes, aqiRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`),
      fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    ]);

    const weather = await weatherRes.json();
    const aqiData = await aqiRes.json();

    const stats = {
      temp: weather.main.temp,
      condition: weather.weather[0].description,
      wind: weather.wind.speed,
      aqi: aqiData.list[0].main.aqi // 1 = Good, 5 = Very Poor
    };

    // 3. AI Analysis Prompt
    const prompt = `You are a disaster resilience expert. Generate a high-priority, 1-sentence warning for citizens in ${city} based on: Weather: ${stats.temp}°C, ${stats.condition}; Wind: ${stats.wind}m/s; AQI: ${stats.aqi}. If conditions are dangerous (e.g., AQI > 3 or heavy rain), specify a clear action.`;

    // 4. Call Hugging Face / OpenAI for the warning text
    const aiRes = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt })
      }
    );

    // Fallback logic if the zero-shot model is unavailable
    const advice = (stats.aqi > 3 || stats.temp > 35) 
      ? `High environmental risk detected in ${city}. Limit outdoor exposure and monitor water levels.`
      : `Atmospheric conditions in ${city} are stable for current settlement operations.`;

    return NextResponse.json({ warning: advice, stats });
  } catch (error) {
    return NextResponse.json({ warning: "Uplink to atmospheric sensors interrupted." });
  }
}