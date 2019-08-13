const PouchDB = require('pouchdb');
const BATCH_SIZE = 20;
const batch = (fams) => {
    const batches = [];
    while (fams.length) {
        batches.push(fams.splice(0, BATCH_SIZE));
    }
    return batches;
}
const familiesdb = new PouchDB('https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families');
familiesdb.allDocs({ include_docs: true }).then(payload => {
    return payload.rows.map(rec => {
        rec.doc._deleted = true;
        return rec.doc;
    }).filter(doc => {
        return !doc._id.startsWith('_design');
    });
}).then(families => {
    const batches = batch(families);
    const promises = batches.map(batch => { return familiesdb.bulkDocs(batch) });
    Promise.all(promises).then(res => {
        familiesdb.close().then(() => {
            console.log("DOCS DELETED AND DB CLOSED");
        })
    }).catch(err => {
        familiesdb.close().then(() => {
            console.log("DB CLOSED ON ERR", err);
        })
    })
}).catch(err => console.log(err))

