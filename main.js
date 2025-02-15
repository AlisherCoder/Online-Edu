import express from "express";
import { config } from "dotenv";
import mainRoute from "./routes/index.js";
import sequelize from "./config/db.js";
import upload from "./config/multer.js";
import setupSwagger from "./config/swagger.js";
config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api", mainRoute);
setupSwagger(app);
app.post("/upload", upload.single("file"), (req, res) => {
  res.send(`Fayl yuklandi: ${req.file.filename}`);
});

async function bootstreb () {
    await sequolizs.sync();
    console.log("Db connetedc");
    app.listen(Port, ()=>{
        console.log(`Server started on port ${Port}`);
    })
}

bootstreb();