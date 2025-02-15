import express from "express";
import sequelize from "./config/db.js";
import { config } from "dotenv";
import mainRoute from "./routes/index.js";
config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api", mainRoute);

app.use("/*", (req, res) => {
   res.status(400).json({ message: "Not found route." });
});

async function Connect() {
   try {
      await sequelize.authenticate();
      // await sequelize.sync({ force: true });
      console.log("Db connected successfully ✅");
      app.listen(port, () => console.log("Server started on port", port));
   } catch (error) {
      console.log(error.message);
   }
}
Connect();
