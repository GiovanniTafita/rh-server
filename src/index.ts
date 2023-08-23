import dotenv from 'dotenv';
import { Express } from "express";
import { serverExpress } from "./app";
import "reflect-metadata";
import { initializeDB } from './database/connection';

dotenv.config();
const port = parseInt(process.env.PORT as string, 10) || 7000;
const hostname = process.env.HOST || "0.0.0.0";
const server: Express = serverExpress;

server.listen(port, hostname, () => {
  initializeDB();
  console.log(`⚡️[server]: Server is running at http://${hostname}:${port}`);
});