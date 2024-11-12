let express = require("express")
const { productController } = require("../controller")

let route = express.Router()

route.post("/create", productController.Create)
route.get("/get", productController.findProduct)
route.delete("/delete/:id", productController.removeProduct)
route.put("/update/:id", productController.updateProduct)

module.exports = route