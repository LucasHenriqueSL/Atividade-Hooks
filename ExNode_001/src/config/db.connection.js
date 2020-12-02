const { Sequelize } =  require("sequelize");
const path = require('path');

const connection = new Sequelize({
    dialect: "sqlite",
    storage: path.resolve(__dirname, "database", "dbzada.sqlite")
});

connection.authenticate()
    .then(() => console.log("Deu bom, conectou"),
          () => console.log("Moiô, não conectou"));

module.exports = connection;