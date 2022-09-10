const express = require ('express');
const routes = require('./network/routes')
const db = require('./db')
const network = require('./components/messages/network');

require('dotenv').config();

db(process.env.DB_CONNECT)
const port = 3000;

var app = express();

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

app.listen(port)
console.log(`La aplicación esta escuchando en http://localhost:${port}`);