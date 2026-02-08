const labels = [
  "sustainable cities",
  "urban development",
  "housing and settlements",
  "public transport",
  "environmental sustainability",
  "unrelated content"
];

const SDG11_KEYWORDS = ["city", "urban", "housing", "transport", "sustainable", "settlement", "green"];

function checkKeywords(text: string) {
  const lowerText = text.toLowerCase();
  return SDG11_KEYWORDS.some(word => lowerText.includes(word));
}

export async function moderatePost(text: string) {
  // Phase 1: Keyword Check
  const hasKeywords = checkKeywords(text);
  
  if (!hasKeywords) {
    return { approved: false, confidence: 1, method: "keywords", label: "unrelated content" };
  }

  // Phase 2: AI Verification (Hugging Face)
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-mnli", // Example model for zero-shot classification from Hugging Face (Credits goes to Original Author)
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: text,
          parameters: { candidate_labels: labels }
        })
      }
    );

    const data = await response.json();
    const topLabel = data.labels[0];
    const score = data.scores[0];

    return {
      approved: topLabel !== "unrelated content",
      confidence: score,
      method: "ai",
      label: topLabel
    };
  } catch (error) {
    console.error("AI Moderation failed, falling back to keywords", error);
    return { approved: true, confidence: 0.5, method: "keywords", label: "urban development" };
  }
}