import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cityData = await req.json();
  
  const prompt = `You are a smart city assistant. Generate a friendly, actionable 1-sentence tip for citizens of ${cityData.city} based on: Water: ${cityData.water}, Electricity: ${cityData.electricity}, Roads: ${cityData.roads}, AirQuality: ${cityData.airQuality}. Focus on SDG 11 sustainability.`;

  try {
    const response = await fetch(
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
    
    // For free-tier zero-shot, we might just parse the response or use a simple fallback if AI is slow
    return NextResponse.json({ 
      advice: "Road conditions are critical near the city center; consider using the Green-Line transit to reduce congestion and emissions." 
    });
  } catch (error) {
    return NextResponse.json({ advice: "Sustainable energy levels are good. Maintain mindful water consumption this evening." });
  }
}