const mysql = require('mysql');
const request = require('request');
const PouchDB = require('pouchdb');
const columnify = require('columnify');
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
const families = () => {
    return familiesDB.allDocs({ include_docs: true }).then(payload => {
        return payload.rows.map(it => { return it.doc }).filter(it => { return !it._id.startsWith('_design') });
    })
}

const idMaps = (families) => {
    return families.filter(fam => {
        return fam.idMap
    }).map(fam => {
        return fam.idMap
    }).flat().filter(idPair => {
        return idPair.newId.includes('adult')
    });
}

const clientVisits = (client) => {
    return sql.query(`SELECT DISTINCT * FROM adultvisits av1 JOIN adultvisits2 av2 ON av1.ClientID = av2.ClientID and av1.VisitNumber = av2.VisitNumber WHERE av1.ClientID = ?`, [client.oldId]).then(rows => { return rows }).catch(err => console.log(err));
}
const buildClientVisits = (client) => {
    console.log(client)
    if (client) {
        return clientVisits(client).then(visits => {
            console.log(visits)
            console.log(visits.length);
            const visitDocs = [];
            for (const sqlVisit of visits) {
                // ANCHOR --begin going through client visits
                const visitDoc = {
                    _id: "",
                    form: null
                }
                const template = JSON.parse(JSON.stringify(avt));
                template.client = client.newId;
                // console.log(template.client)
                // let unknowns = 0;
                // let dashedOut = 0;
                // let empty = 0;
                // let paired = 0;
                // let questionArrayCt = 0;
                // let checkboxesCt = 0;
                // let radioCt = 0;
                // let mapCt = 0;
                // let directCt = 0;
                // let conditionalCt = 0;
                // let otherCt = 0;
                // const outputs = [
                //     unknowns,
                //     dashedOut,
                //     empty,
                //     paired,
                //     questionArrayCt,
                //     checkboxesCt,
                //     radioCt,
                //     mapCt,
                //     directCt,
                //     conditionalCt,
                //     otherCt
                // ]
                for (const key in avk) {
                    const oldDbMap = avk[key];
                    const index = ftools.indexQuestion(template, key);

                    if (avk[key] == '----') {
                        //outputs[0]++;
                    } else if (avk[key] == '???') {
                        //outputs[1]++;
                    } else if (avk[key] == '') {
                        //outputs[2]++;
                    } else {
                        //outputs[3]++;
                        if (index) {
                            const q = ftools.getQuestionByIndex(template, index);
                            switch (oldDbMap.type) {
                                case 'direct': ftools.mapDirect(q, oldDbMap, sqlVisit)
                                    //outputs[4]++;
                                    break;
                                case 'question-array': ftools.mapQuestionArray(q, oldDbMap, sqlVisit)
                                    //outputs[5]++;
                                    break;
                                case 'checkboxes': ftools.mapCheckboxes(q, oldDbMap, sqlVisit)
                                    //outputs[6]++;
                                    break;
                                case 'radio': ftools.mapRadio(q, oldDbMap, sqlVisit)
                                    //outputs[7]++;
                                    break;
                                case 'input-map': ftools.mapInputMap(q, oldDbMap, sqlVisit)
                                    // outputs[8]++
                                    break;
                                case 'conditional': ftools.mapConditional(q, oldDbMap, sqlVisit)
                                    //outputs[9]++;
                                    break;
                                default: //outputs[10]++;
                                    break;
                            }
                        } else {
                            throw new Error(`INDEXING ERROR: null index returned for key ${key}`);
                        }
                    }

                }
                // const i = ftools.indexQuestion(template, 'Kidney disease');
                // const q = ftools.getQuestionByIndex(template, i);
                // const total = outputs.slice(0, 4).reduce((acc, next) => { return acc + next });
                // const percentMapped = `%${((outputs[3] / total) * 100).toFixed(2)}`;
                // const res = {
                //     dashedOut: outputs[0],
                //     unknowns: outputs[1],
                //     empty: outputs[2],
                //     paired: outputs[3],
                //     questionArrayCt: outputs[4],
                //     conditionalCt: outputs[5],
                //     checkboxesCt: outputs[6],
                //     radioCt: outputs[7],
                //     mapCt: outputs[8],
                //     directCt: outputs[9],
                //     otherCt: outputs[10],
                //     percentMapped
                // }
                // console.log(total);
                // console.log(columnify(res, { columns: ['CATEGORY', 'QTY'] }));
                const compressedForm = ftools.compress(template, {});
                visitDoc.form = compressedForm;
                visitDoc.form.client = client.newId;
                visitDoc._id = ftools.makeVisitId(client.newId, sqlVisit['VisitDate'], visitDoc.form)
                visitDocs.push(visitDoc);
            }
            return visitDocs;
        }).catch(err => { throw err });
    } else {
        return [];
    }

}

const main = () => {
    families().then(families => {
        const adultIdMaps = idMaps(families);
        const clientPromises = adultIdMaps.map(buildClientVisits);
        console.log(clientPromises.length);
    }).catch(err => { throw err })
}
main()