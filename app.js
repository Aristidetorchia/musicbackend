const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;

const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");

const dbConnect = require("./database/dbConnection");

app.use(express.json());

app.use("/", indexRouter); // RUTA RAÍZ
app.use("/products", productsRouter);

//levanta el servidor
app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});

dbConnect();
