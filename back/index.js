const server = require('./src/server')
const PORT = 3000;
server.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`))