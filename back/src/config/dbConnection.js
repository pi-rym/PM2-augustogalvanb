const mongoose = require('mongoose');


//realiza la conexion con la base de datos
const dbConnection = async () => {
    await mongoose.connect("");
};

module.exports = dbConnection;
