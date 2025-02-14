import express from "express";
import sequolizs from "./config/db.js";
import dotenv from "dotenv";
import MainRouter from "./routes/index.js";
dotenv.config();
let Port = process.env.PORT || 4000
const app = express();
app.use(express.json());

app.use("/api", MainRouter);

async function bootstreb () {
    await sequolizs.sync();
    console.log("Db connetedc");
    app.listen(Port, ()=>{
        console.log(`Server started on port ${Port}`);
    })
}

bootstreb();