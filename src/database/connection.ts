import { AppDataSource } from "./data-source";

export const initializeDB = async () => AppDataSource.initialize()
  .then(() => {
    console.log("Database running...");
  })
  .catch((error) => console.log(error))