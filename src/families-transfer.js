'use strict';

const mysql = require('mysql');
const request = require('request');
const PouchDB = require('pouchdb');
const pouchCollate = require('pouchdb-collate');
//const Database = require('classes/Database');

const at = require('./form-templates/adult').adultTemplate;
const ct = require('./form-templates/child').childTemplate;
const ak = require('./keymaps/adultkeys').adultKeys;
const ck = require('./keymaps/childkeys').childKeys;
const ftools = require('./wko-forms');
const BATCH_SIZE = 20;
const batch = (fams) => {
  const batches = [];
  while (fams.length) {
    batches.push(fams.splice(0, BATCH_SIZE));
  }
  return batches;
}

const db = new PouchDB('https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families');
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
const querys = {
  familyIDList: 'SELECT DISTINCT FamilyID FROM adult ORDER BY FamilyID'
};
let putPromises = [];
let bulkFamilies = [];
const sql = new Database({
  host: 'localhost',
  user: 'root',
  password: 'GBP@ck3rs#1',
  database: 'wko'
});
const buildFamily = (fam, results = []) => {
  const clientPromises = [];
  const family = {
    _id: null,
    child: [],
    adult: [],
    idMap: []
  };
  clientPromises.push(sql.query('SELECT * FROM adult WHERE FamilyID = ?', [fam.FamilyID]).then(rows => { return rows }).catch(err => console.log(err)));
  clientPromises.push(sql.query('SELECT * FROM child WHERE FamilyID = ?', [fam.FamilyID]).then(rows => { return rows }).catch(err => console.log(err)));
  return Promise.all(clientPromises).then(([adultResults, childResults]) => {
    const children = [];
    const adults = [];
    const idMap = [];
    for (const adult in adultResults) {
      const template = JSON.parse(JSON.stringify(at));
      template.client = encodeURI(pouchCollate.toIndexableString([fam.FamilyID.toString(), 'adult', adult]));
      idMap.push({
        oldId: adultResults[adult].ClientID,
        newId: encodeURI(pouchCollate.toIndexableString([fam.FamilyID.toString(), 'adult', adult]))
      })
      for (const prop in ak) {
        const index = ftools.indexQuestion(template, prop);
        const q = ftools.getQuestionByIndex(template, index);
        if (adultResults[adult][ak[prop]]) {
          q.input = adultResults[adult][ak[prop]];
        } else {
          q.input = "";
        }

      }
      adults.push({
        clientFName: adultResults[adult].First,
        clientLName: adultResults[adult].Last,
        clientID: encodeURI(pouchCollate.toIndexableString([fam.FamilyID.toString(), 'adult', adult])),
        form: template
      });
    }
    for (const child in childResults) {
      const template = JSON.parse(JSON.stringify(ct));
      template.client = encodeURI(pouchCollate.toIndexableString([fam.FamilyID.toString(), 'child', child]));
      idMap.push({
        oldId: childResults[child].ClientID,
        newId: encodeURI(pouchCollate.toIndexableString([fam.FamilyID.toString(), 'child', child]))
      });
      for (const prop in ck) {
        const index = ftools.indexQuestion(template, prop);
        const q = ftools.getQuestionByIndex(template, index);
        if (childResults[child][ck[prop]]) {
          q.input = childResults[child][ck[prop]];
        } else {
          q.input = "";
        }
      }
      children.push({
        clientFName: childResults[child].First,
        clientLName: childResults[child].Last,
        clientID: encodeURI(pouchCollate.toIndexableString([fam.FamilyID.toString(), 'child', child])),
        form: template
      });
    }
    family._id = fam.FamilyID.toString();
    family.child = children;
    family.adult = adults;
    family.idMap = idMap;
    return family;
  }).catch(err => { console.log(err) });
}

const main = () => {
  sql.connect();
  sql.query('SELECT DISTINCT FamilyID FROM adult ORDER BY FamilyID').then(rows => {
    return rows;
  }).then(oldDbFamilies => {
    console.log(oldDbFamilies.length);
    const builtFamiliesPromises = oldDbFamilies.map(buildFamily);
    return Promise.all(builtFamiliesPromises).then(families => { return families }).catch(err => console.log(err));
  }).then(familyDocs => {
    const batches = batch(familyDocs);
    //db.bulkDocs(batches[0]).then(res => console.log(res)).catch(err => console.log(err));
    const promises = batches.map(batch => { return db.bulkDocs(batch) });
    return promises;
  }).then(putPromises => {
    Promise.all(putPromises).then(results => {
      db.close().then(() => {
        console.log('TRANSFER COMPLETE, CLOSED DB');
      })
    }).catch(err => console.log('TRANSFER FAILED WITH ERROR: ', err));
  })
  // .then(putReses => {
  //   console.log(putReses.length);
  //   //db.close().then(() => { console.log('BATCHES DONE, DB CLOSED.') }).catch(err => console.log(err));
  // }).catch(err => { console.log(err) })
}

main();


// sql.query('SELECT DISTINCT FamilyID FROM adult ORDER BY FamilyID').then(rows => {
//   console.log(`There are ${rows.length} families`);
//   let famCount = rows.length;
//   for (const row of rows) {
//     const clientPromises = [];
//     const family = {
//       _id: null,
//       child: [],
//       adult: [],
//       idMap: []
//     };

//     clientPromises.push(sql.query('SELECT * FROM adult WHERE FamilyID = ?', [row.FamilyID]));
//     clientPromises.push(sql.query('SELECT * FROM child WHERE FamilyID = ?', [row.FamilyID]));
//     Promise.all(clientPromises).then(([adultResults, childResults]) => {
//       const children = [];
//       const adults = [];
//       const idMap = [];
//       for (const adult in adultResults) {
//         const template = JSON.parse(JSON.stringify(at));
//         template.client = encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult]));
//         idMap.push({
//           oldId: adultResults[adult].ClientID,
//           newId: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult]))
//         })
//         for (const prop in ak) {
//           const index = ftools.indexQuestion(template, prop);
//           const q = ftools.getQuestionByIndex(template, index);
//           if (adultResults[adult][ak[prop]]) {
//             q.input = adultResults[adult][ak[prop]];
//           } else {
//             q.input = "";
//           }

//         }
//         adults.push({
//           clientFName: adultResults[adult].First,
//           clientLName: adultResults[adult].Last,
//           clientID: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult])),
//           form: template
//         });
//       }
//       for (const child in childResults) {
//         const template = JSON.parse(JSON.stringify(ct));
//         template.client = encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child]));
//         idMap.push({
//           oldId: childResults[child].ClientID,
//           newId: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child]))
//         });
//         for (const prop in ck) {
//           const index = ftools.indexQuestion(template, prop);
//           const q = ftools.getQuestionByIndex(template, index);
//           if (childResults[child][ck[prop]]) {
//             q.input = childResults[child][ck[prop]];
//           } else {
//             q.input = "";
//           }
//         }
//         children.push({
//           clientFName: childResults[child].First,
//           clientLName: childResults[child].Last,
//           clientID: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child])),
//           form: template
//         });
//       }
//       family._id = row.FamilyID.toString();
//       family.child = children;
//       family.adult = adults;
//       family.idMap = idMap;

//       //famDb.put(family).then(res => { console.log(res) });
//       bulkFamilies.push(family);
//       famCount--;
//       if ((bulkFamilies.length % BATCH_SIZE == 0 && bulkFamilies.length > 0) || famCount < BATCH_SIZE) {
//         const famDb = new PouchDB('https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families/');
//         famDb.bulkDocs(bulkFamilies).then(res => {
//           famDb.close().then(close => {
//             console.log(res)
//           }).catch(err => console.log(err));
//         }).then(err => { console.log(err) });
//         bulkFamilies = [];
//       }
//     }).catch(err => {
//       console.log(err);
//     })

//   }
// })

