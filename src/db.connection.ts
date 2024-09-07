import { Sequelize } from "sequelize-typescript";
import config from "./config";

const sequelizeConnection = new Sequelize({
  ...config.getDatabaseConfig(),
  dialect: "mysql",
  models: [__dirname + "/models"],
});

export default sequelizeConnection;
