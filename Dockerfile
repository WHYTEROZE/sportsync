# Usa la imagen oficial de Node.js 22.14.0
FROM node:22.14.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Instala dependencias (elige uno de los gestores: npm, yarn o pnpm)
RUN npm install
# RUN yarn install
# RUN pnpm install

# Copia el resto del proyecto
COPY . .

# Construye el proyecto de Next.js
RUN npm run build
# Si usas Yarn: RUN yarn build

# Expone el puerto en que Next.js se ejecutará
EXPOSE 3000

# Inicia la aplicación en producción
CMD ["npm", "run", "start"]
# o con Yarn: CMD ["yarn", "start"]
