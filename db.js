const db = require('mongoose');

db.Promise = global.Promise;

async function connect(uri) {

            await db.connect(uri, {
                
                useUnifiedTopology: true,
            })
            .then(() => console.log('[db] Conectada con éxito'))
            .catch(err => console.error('[db]', err));
}

//mongodb://tonny187:<password>@ac-hvdield-shard-00-00.gctylup.mongodb.net:27017,ac-hvdield-shard-00-01.gctylup.mongodb.net:27017,ac-hvdield-shard-00-02.gctylup.mongodb.net:27017/{OJOOOOO!!!! AQUI VA EL NOMBRE DE LA BASE DE DATOS}?ssl=true&replicaSet=atlas-j377c9-shard-0&authSource=admin&retryWrites=true&w=majority

module.exports = connect;