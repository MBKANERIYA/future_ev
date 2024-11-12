let express = require("express")
let userRouter = require("./user.route")
let productRoute = require("./product.route")

let routes = express.Router()

routes.use("/user", userRouter)
routes.use("/product", productRoute)

module.exports = routes