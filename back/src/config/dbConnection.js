const mongoose = require('mongoose');


//realiza la conexion con la base de datos
const dbConnection = async () => {
    await mongoose.connect("mongodb+srv://augustogalvanb:PixfcTL9d4qAX1Uj@cluster0.d47hri7.mongodb.net/appMovie?retryWrites=true&w=majority&appName=Cluster0");
};

module.exports = dbConnection;