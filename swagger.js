import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:8000",
};

const outputFile = "./swagger.json";
const routes = [
  "./routes/auth.routes.js",
  "./routes/payment.routes.js",
  "./routes/refund.routes.js",
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
