import Logger from "../logger/logger";
import { AppDataSource } from "./data-source";

export const initializeDB = async () => AppDataSource.initialize()
  .then(() => {
    Logger.info("Database is running...");
  })
  .catch((error) => Logger.error(error))