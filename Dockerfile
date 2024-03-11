FROM node:21.6.2

WORKDIR /Portfolio_x/

# install app dependencies
COPY package.json ./
RUN npm install

# copy project files
COPY public/ ./public/
COPY src/ ./src/

# vite settings, can set base url here
COPY vite.config.js ./
# copy & replace tailwindcss config
COPY tailwind.config.js ./
# copy & replace postcss config
COPY postcss.config.js ./


CMD ["npm", "run", "dev"]
# remember the port exporsed, nothing useful here
EXPOSE 3000
# then will be http://localhost:3000/hello-world/ if test locally?
# docker run -p 3000:3000 -itd 1a5f694247b4
