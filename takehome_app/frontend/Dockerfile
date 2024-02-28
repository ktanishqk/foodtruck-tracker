FROM node:14 AS frontend


WORKDIR /takehome_app/frontend


COPY . .


RUN npm install


RUN npm run build


EXPOSE 3000


CMD ["npm", "start"]
