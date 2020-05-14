FROM node:12.16.1-alpine

WORKDIR /opt/app/todo-backend

COPY . /opt/app/todo-backend

# In Production Env
RUN yarn install --production=true

CMD yarn watch