const PouchDB = require('pouchdb');
const familiesdb = new PouchDB('https://www.hfatracking.net/couchdb/formarchive');
familiesdb.allDocs({ include_docs: true }).then(payload => {
    payload.rows.forEach(rec => {
        if (!rec.doc._id.startsWith('_design')) {
            familiesdb.remove(rec.doc).then(res => console.log(res)).catch(err => console.log(err));
        }

    });
}).catch(err => console.log(err))
