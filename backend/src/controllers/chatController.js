const { aiOpenRouter } = require("../services/chatService");

const chatController = async (req, res) => {
  try {
    const data = await aiOpenRouter(req.body);

    // 🔥 EXTRAER TEXTO DE OPENROUTER
    const message =
      data?.choices?.[0]?.message?.content ||
      "Lo siento, no pude generar una respuesta.";

    // ✅ FORMATO QUE DEEPCHAT ENTIENDE
    return res.status(200).json({
      text: message,
    });
  } catch (error) {
    console.error("Chat controller error:", error);
    
    return res.status(500).json({
      error: "Error processing chat request",
    });
  }
};

module.exports = { chatController };
