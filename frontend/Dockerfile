# entorno de ejecución en este caso node con la versión 20 hacia arriba, y - alpine es un entorno muy liviano de node.js
FROM node:20-alpine

# Activar pnpm (viene con corepack)
RUN corepack enable

# es el directorio donde se va a copiar el proyecto
WORKDIR /app

# Copiamos archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalamos dependencias
RUN pnpm install

# Copiamos el resto del proyecto
COPY . .

CMD ["pnpm", "dev"]
