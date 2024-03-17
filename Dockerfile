# Usa la imagen oficial de Node.js v20.11 como base
FROM node:20.11

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias
RUN npm install

# Construye la aplicación
RUN npm run build

# Instala el paquete serve globalmente
RUN npm install -g serve

# Expone el puerto 5000 en el contenedor (puedes cambiarlo según tu configuración)
EXPOSE 4173

# Inicia la aplicación servida por serve desde la carpeta dist cuando se ejecute el contenedor
CMD ["npm", "run", "serve"]
