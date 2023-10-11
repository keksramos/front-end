const express = require("express");
const router = express.Router();
const fs = require("fs");

/** Ayuda a leer el directorio sobre el cual se está ejecutando el proyecto 
 * Lee los ficheros con terminacion js y genera varias rutas a partir del contenido de los scripts.
*/
const pathRouter = `${__dirname}`;

/** Ayuda a separar el nombre de un archivo por su nombre y su extensión */
const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

/** Ayuda a leer un directorio 
 * Obtiene cada archivo y agregarlos al router de manera dinámica
 * Evitando index
*/
fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ["index"].includes(fileWithOutExt);
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
  }
});

/** Agrega un endpoint al final por si no encuentra un recurso de forma dinámica */
router.get("*", (req, res) => {
  res.status(404);
  res.send({ error: "Not found" });
});

/** Exportamos el router */
module.exports = router;