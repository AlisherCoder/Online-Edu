import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
   host: "localhost",
   username: "root",
   password: "953901313",
   database: "onlineedu",
   dialect: "mysql",
   logging: false,
});

export default sequelize;
