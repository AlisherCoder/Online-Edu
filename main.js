import express from "express";
import { config } from "dotenv";
import mainRoute from "./routes/index.js";
import sequelize from "./config/db.js";
config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api", mainRoute);

async function connection() {
  try {
    await sequelize.sync();
    console.log("Connected database successfully ✔️");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${3000} ✔️`);
    });
  } catch (error) {
    console.log(error);
  }
}

connection();
