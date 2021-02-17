let express = require('express')
let app = express()

let sequelize = require("./db")
let user = require('./controllers/usercontroller')

sequelize.sync()

//This is the router we exported from the file
//let simple = require ('./controllers/simplecontroller')
//This is express handing off matching endpoint calls
//to "localhost:3000/simple"
//The "simplecontroller" will handle the rest
//app.use("/simple", simple)

//After this all routes expect json data
app.use(express.json())
app.use('/user', user)


app.listen(3000, () => {
    console.log("App is running on 3000")
})




