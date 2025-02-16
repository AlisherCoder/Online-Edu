import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
   host: "localhost",
   username: "root",
   password: "Abduhamid",
   database: "onlineedu",
   dialect: "mysql",
   logging: false,
});

export default sequelize;
