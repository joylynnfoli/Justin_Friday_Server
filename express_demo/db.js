const Sequelize = require("sequelize")

const sequelize = new Sequelize(
    "express-demo",
    "postgres",
    "password", {
        host: "localhost",
        dialect: 'postgres',
        port: 5432 //not required, 5432 is default
    }
)

sequelize.authenticate()
    .then(() =>{
        console.log("connection to the database express-demo")
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = sequelize