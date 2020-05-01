const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'circulation';

const circulation_repo = require('./model/circulation_repository');
const data = require('./circulation.json');

async function main(){
    const client =  new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    
    const results = await circulation_repo.loadData(data);
    console.log(results.insertedCount, results.ops);

    const admin = client.db(dbName).admin(); 
    // console.log(await admin.serverStatus());
    console.log(await admin.listDatabases());
}

main();