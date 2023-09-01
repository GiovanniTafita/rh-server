import dotenv from 'dotenv';
import { serverExpress } from "./app";
import "reflect-metadata";
import { initializeDB } from './database/connection';
import Logger from './logger/logger';
import { Server } from 'socket.io';
import { createServer } from 'http';

dotenv.config();
const port = parseInt(process.env.PORT as string, 10) || 7000;
const hostname = process.env.HOST || "0.0.0.0";
const httpServer = createServer(serverExpress);

const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  Logger.info(socket.id);
  socket.on('test', (data) => {
    Logger.debug(data);
  })
})

httpServer.listen(port, hostname, () => {
  initializeDB();
  Logger.http(`⚡️[server]: Server is running at http://${hostname}:${port}`);
});