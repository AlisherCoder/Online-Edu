import express from "express";
import { config } from "dotenv";
import mainRoute from "./routes/index.js";
import sequelize from "./config/db.js";
config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api", mainRoute);

async function bootstreb () {
    await sequolizs.sync();
    console.log("Db connetedc");
    app.listen(Port, ()=>{
        console.log(`Server started on port ${Port}`);
    })
}

bootstreb();