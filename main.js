import express from "express";
import sequolizs from "./config/db.js";
import dotenv from "dotenv";
import MainRouter from "./routes/index.js";
dotenv.config();
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// const options = {
//     definition: {
//       openapi: "3.1.0",
//       info: {
//         title: "OnlineCourse project",
//         version: "0.1.0",
//         description:
//           "This is a simple CRUD API application made with Express and documented with Swagger",
//       },
//       servers: [
//         {
          
//           url: "http://localhost:3000",
//         },
//       ],
//     },
//     apis: ["./routes/*.js"],
//   };

/**
 * @swagger
 * /api:
 *   post:
 *     summary: Login to get JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                   example: "your_jwt_token"
 *                 expires_in:
 *                   type: integer
 *                   example: 3600
 */
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "OnlineCourse project",
        version: "1.0.0",
        description: "This is a simple CRUD API application made with Express and documented with Swagger",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [{ bearerAuth: [] }],
    },
    apis: ["./routes/*.js"],
  };
const specs = swaggerJsdoc(options);  


let Port = process.env.PORT || 4000
const app = express();
app.use(express.json());

app.use("/api", MainRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

async function bootstreb () {
    await sequolizs.sync();
    console.log("Db connetedc");
    app.listen(Port, ()=>{
        console.log(`Server started on port ${Port}`);
    })
}

bootstreb();