const server = require('./src/server');
const PORT = 3000;
const dbConnection = require("./src/config/dbConnection");

dbConnection()
.then((res) => {
    server.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`));
})
.catch((error) => {
    error.message;
})
