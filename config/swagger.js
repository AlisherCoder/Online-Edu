import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "WallPaper Project",
        version: "1.0.0",
        description: "This is Swagger documentation for the Wallpaper project",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Development server",
        },
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT", 
            },
        },
    },
    security: [
        {
            BearerAuth: [], 
        },
    ],
};

const options = {
    definition: swaggerDefinition,
    apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger;
