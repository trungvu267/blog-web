import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import config from "./config.js";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BlogAPI Documentation",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: {
      bearerAuth: [],
    },
  },
  apis: ["../routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  // swagger page

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  //Docs in JSON format
  app.get("docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`Docs available at http://localhost:${config.port}/api-docs`);
}

export default swaggerDocs;
