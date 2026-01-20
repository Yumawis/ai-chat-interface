# 🤖 AI Chat Interface

Aplicación web desarrollada con **React.js** y **Vite.js** (solo frontend), que permite interactuar con un **chat de inteligencia artificial** mediante el consumo de una API externa. La interfaz está construida con **Material UI**, y el chat se implementa usando el componente **Deep Chat**, el cual permite una alta personalización visual y funcional.

La **API Key** se genera desde la plataforma **OpenRouter**, que actúa como intermediario para el consumo de modelos de inteligencia artificial.

---

## 🖼️ Vista previa de la aplicación

<p align="center">
  <img width="850" height="480" alt="IA Chat App" src="https://github.com/user-attachments/assets/edf9c90c-3e80-4250-a58a-2a5f88be7e83" />
</p>

---

## ⚙️ Tecnologías utilizadas

**Frontend:**
- ⚛️ React.js
- ⚡ Vite.js
- 🎨 Material UI
- 💬 Deep Chat (chat component)

**Servicios externos:**
- 🔑 OpenRouter
- 🤖 Modelos de Inteligencia Artificial (LLMs)

---

## 🔌 ¿Qué es OpenRouter?

**OpenRouter** es una plataforma que permite acceder a múltiples **modelos de inteligencia artificial** a través de una única API, funcionando como un **gateway unificado** para distintos proveedores de modelos LLM.

En este proyecto, OpenRouter se utiliza para:

- 🔑 Generar y gestionar la **API Key**
- 🤖 Conectarse a diferentes modelos de IA desde un solo endpoint
- 🔄 Cambiar de modelo sin modificar la lógica del frontend
- ⚙️ Simplificar el consumo de IA en aplicaciones web

Gracias a OpenRouter, la aplicación mantiene una arquitectura **simple, flexible y escalable**, ideal para proyectos de práctica y demostración técnica.

---

## 🚀 Instalación y ejecución

### 1️⃣ Clona el repositorio
```bash
git clone https://github.com/Yumawis/ai-chat-interface.git
cd ia-chat-interface
```

### 2️⃣ Instala las dependencias
```bash
cd frontend
pnpm install
```

### 3️⃣ Configura las variables de entorno
Crea un archivo **.env** en la carpeta principal del proyecto
```bash
VITE_OPENROUTER_API_KEY=tu_api_key_aqui
```
La API Key debe generarse previamente desde la plataforma **OpenRouter**.

### 4️⃣ Ejecuta el frontend
```bash
cd ../frontend
pnpm dev
```
Esto iniciará la aplicación React.js (por defecto en `http://localhost:5173`).

---

## 🧩 Funcionamiento del chat

1. El usuario escribe un mensaje en el campo de texto.
2. El componente **Deep Chat** gestiona la interfaz y la experiencia del chat. 
3. El mensaje se envía a la API de Open Router junto con la API Key.
4. El modelo de inteligencia artificial procesa la solicitud.
5. La respuesta se muestra en tiempo real dentro del chat.

---

## 🧑‍💻 Autor

**Yury Martinez**  
Fullstack & UI Designer  
📍 Colombia  
💼 [GitHub](https://github.com/Yumawis)
