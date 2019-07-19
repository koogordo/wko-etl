const mysql = require('mysql');
const request = require('request');
const PouchDB = require('pouchdb');
const pouchCollate = require('pouchdb-collate');
const avt = require('./form-templates/adultvisit').aVisitTemplate;
const cvt = require('./form-templates/childvisit').cVisitTemplate;
const avk = require('./keymaps/adultvisitkeys').adultVisitKeys;
const cvk = require('./keymaps/childvisitkeys').childVisitKeys;
const ftools = require('./wko-forms');
class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
    connect() {
        this.connection.connect();
    }
    end() {
        this.connection.end();
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}
const sql = new Database({
    host: 'localhost',
    user: 'root',
    password: 'GBP@ck3rs#1',
    database: 'wko'
});
sql.connect();
const familiesDB = new PouchDB("https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families");
familiesDB.allDocs({ include_docs: true }).then(payload => {
    return payload.rows.map(it => { return it.doc }).filter(it => { return !it._id.startsWith('_design') });
}).then(families => {
    //ANCHOR --begin family promise resolved
    console.log("inside resolved famleis")
    const adultIdMaps = families.map(fam => { return fam.idMap }).flat().filter(idPair => { return idPair.newId.includes('adult') });
    const dataPromises = [];
    let c = 0;
    //for (const client of adultIdMaps) {
    const client = adultIdMaps.filter(idmap => { return idmap.oldId = 1566 })[0];
    console.log(client);
    // ANCHOR --begin going through clients
    const putVisits = [];
    dataPromises.push(sql.query(`SELECT * FROM adultvisits av1 JOIN adultvisits2 av2 ON av1.ClientID = av2.ClientID WHERE av1.ClientID = ? LIMIT 1`, [client.oldId]).then(rows => { return rows }));
    Promise.all(dataPromises).then(([sqlAdultVisits]) => {
        // ANCHOR --begin data promises block
        for (const sqlVisit of sqlAdultVisits) {
            // ANCHOR --begin going through client visits
            const visitDoc = {
                _id: "",
                form: null
            }
            const template = JSON.parse(JSON.stringify(avt));
            template.client = client.newId;
            for (const key in avk) {
                const oldDbMap = avk[key];
                const index = ftools.indexQuestion(template, key);
                if (index) {
                    const q = ftools.getQuestionByIndex(template, index);
                    switch (oldDbMap.type) {
                        case 'direct': ftools.mapDirect(q, oldDbMap, sqlVisit)
                            break;
                        case 'question-array': ftools.mapQuestionArray(q, oldDbMap, sqlVisit)
                            break;
                    }
                } else {
                    throw new Error(`INDEXING ERROR: null index returned for key ${key}`);
                }
            }
            const i = ftools.indexQuestion(template, 'Phone Numbers');
            const q = ftools.getQuestionByIndex(template, i);

            // const compressedForm = ftools.compress(template, {});
            // visitDoc.form = compressedForm;
            // visitDoc._id = ftools.makeVisitId(client.newId, sqlVisit['VisitDate'])
            // putVisits.push(visitDoc);
            // ANCHOR end going through client visits--
        }
        const db = new PouchDB("https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/formarchive");
        console.log(putVisits[0]);
        // db.bulkDocs(putVisits).then(res => {
        //     console.log(res);
        // }).catch(err => console.log(err));
        // ANCHOR end data promises block--
    }).catch(err => { console.log(err) })

    // ANCHOR end going through clients--
    //}
    // ANCHOR end family promise resolved--
})

