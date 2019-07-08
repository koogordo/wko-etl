const PouchDB = require('pouchdb');
const familiesdb = new PouchDB('https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families');
familiesdb.allDocs({ include_docs: true }).then(payload => {
    payload.rows.forEach(rec => {
        if (!rec.doc._id.startsWith('_design')) {
            familiesdb.remove(rec.doc).then(res => console.log(res));
        }

    });
})