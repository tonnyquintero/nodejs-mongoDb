const express = require ('express');
const app = express();
const server = require('http').Server(app)
const cors = require('cors');
const routes = require('./network/routes')
const socket = require('./socket');
const db = require('./db')
const network = require('./components/messages/network');

require('dotenv').config();

socket.connect(server);
db(process.env.DB_CONNECT)
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(network);
/*El router ya no se usa para enrutar ya viene por defecto sin llamarlo*/
//app.use(router);

routes(app);

app.use('/app', express.static('public'))

// app.use('/', function (req, res) {
//     res.send('Hola');
// })

server.listen(port)
console.log(`La aplicación esta escuchando en http://localhost:${port}`);