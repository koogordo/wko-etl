const mysql = require('mysql');
const request = require('request');
const PouchDB = require('pouchdb');
const pouchCollate = require('pouchdb-collate');
const avt = require('./form-templates/adultvisit').aVisitTemplate;
const cvt = require('./form-templates/childvisit').cVisitTemplate;
const avk = require('./keymaps/adultvisitkeys').adultVisitKeys;
const cvk = require('./keymaps/childvisitkeys').childVisitKeys;
const ftools = require('./wko-forms');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'GBP@ck3rs#1',
    database: 'wko'
});

const familiesDB = new PouchDB("https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families");
familiesDB.allDocs({ include_docs: true }).then(payload => { // ANCHOR family all docs promise begin
    return payload.rows.map(it => { return it.doc }).filter(it => { return !it._id.startsWith('_design') });
    // ANCHOR family all docs promise end
}).then(families => { //ANCHOR start family promise resolved
    console.log("inside resolved famleis")
    families.forEach(console.log)
    // ANCHOR end family promise resolved
})

