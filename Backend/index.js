import express from "express";
import cors from "cors";
import { dbConnection } from "./database/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./middleware/logger.js";
import { unknownEndpoint } from "./middleware/unknownEndpoint.js";
import { userRouter } from "./routes/user.routes.js";
import { orderRouter } from "./routes/order.routes.js";
import { productRouter } from "./routes/product.routes.js";
import { productOrderedRouter } from "./routes/productOrdered.routes.js";

const server = express();
const PORT = 3000;

server.use(
  express.json()
); /* transforma el cuerpo de las peticiones en un json*/
server.use(
  cors()
); /* me permite recibir solicitudes de clientes fuera de mi dominio */
server.use(logger);
server.use("/api/v1/users", userRouter);
server.use("/api/v1/orders", orderRouter);
server.use("/api/v1/products", productRouter);
server.use("/api/v1/productsOrdered", productOrderedRouter);
server.use(unknownEndpoint);
server.use(errorHandler);


async function main() {
    await dbConnection();

  server.listen(PORT, () => {
    console.log(`server run in http://localhost:${PORT}`);
  });
}

main();
