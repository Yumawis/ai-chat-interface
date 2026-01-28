import { Box, Typography } from "@mui/material";
import { DeepChat } from "deep-chat-react";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "12px", md: "25px" },
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
          width: {
            xs: "84%",
            sm: "380px",
            md: "400px",
          },
          height: {
            xs: "clamp(420px, 55vh, 520px)",
            md: "500px",
          },
          display: "flex",
        }}
      >
        <DeepChat
          connect={{
            url: "https://ai-chat-interface-backend-1civ.onrender.com/chat",
            method: "POST",
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "18px",
            background: "rgba(30, 30, 30, 0.6)",
            padding: "18px 12px 8px 12px",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
          textInput={{
            styles: {
              container: {
                width: "90%",
              },
            },
            placeholder: {
              text: "Escribe algo...",
              style: {
                color: "#555454ff",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default App;
