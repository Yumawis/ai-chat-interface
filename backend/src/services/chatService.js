const aiOpenRouter = async (payload) => {
  const messages = payload.messages.map((msg) => ({
    role: msg.role,
    content: msg.text,
  }));

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages,
        max_tokens: 30,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("❌ OpenRouter error:", errorText);

    throw new Error("OpenRouter request failed");
  }

  return response.json();
};

module.exports = { aiOpenRouter };
