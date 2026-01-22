require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const connectDB = require('./dbConfig/connect')
const home = require('./routes/home.route')
const client = require('./routes/client.route')
const categoryRoute = require('./routes/category.route')  
const productRoute = require("./routes/product.route");

//Middleware
connectDB()
app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(home)
app.use("/client", client)
app.use("/api/v1/products", productRoute)
app.use("/api/v1/categories", categoryRoute)


app.get("/index", (req, res) => {
  res.render("index")
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
 })


