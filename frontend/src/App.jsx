import { Box, Typography } from "@mui/material";
import { DeepChat } from "deep-chat-react";

import { ACTIVE_AI_MODEL } from "./config/aiConfig";

const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "25px",
        backgroundImage:
          "linear-gradient(to left bottom, #2e0537, #39326a, #355e9c, #218cc8, #12bceb)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#ffffff",
          fontWeight: 600,
          textShadow: "0 2px 6px rgba(0,0,0,0.5)",
        }}
      >
        IA CHAT
      </Typography>
      <Box
        sx={{
          width: "400px",
          height: "500px",
          borderRadius: "18px",
          display: "flex",
        }}
      >
        <DeepChat
          connect={{ stream: true }}
          directConnection={{
            openRouter: {
              key: apiKey,
              chat: {
                model: ACTIVE_AI_MODEL,
                max_tokens: 30,
              },
            },
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "14px",
            background: "rgba(30, 30, 30, 0.6)",
          }}
          textInput={{
            placeholder: {
              text: "Escribe algo...",
              style: {
                color: "#555454ff",
              },
            },
            style: {
              borderRadius: "14px",
              padding: "10px",
              border: "1px solid #333",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default App;
