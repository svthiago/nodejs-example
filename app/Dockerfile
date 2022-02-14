FROM node:latest
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN chown -Rh $user:$user /app
USER $user
COPY package.json package-lock.json ./
# RUN npm install
EXPOSE 5000
COPY . .
CMD ["nodemon", "index.js"]
