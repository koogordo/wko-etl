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
const BATCH_SIZE = 10;
// const db = new PouchDB(
//   "http://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families"
// );
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
sql.connect();
sql.query('SELECT DISTINCT FamilyID FROM adult ORDER BY FamilyID').then(rows => {
  for (const row of rows) {
    const clientPromises = [];
    const family = {
      _id: null,
      child: [],
      adult: [],
      idMap: []
    };

    clientPromises.push(sql.query('SELECT * FROM adult WHERE FamilyID = ?', [row.FamilyID]));
    clientPromises.push(sql.query('SELECT * FROM child WHERE FamilyID = ?', [row.FamilyID]));
    Promise.all(clientPromises).then(([adultResults, childResults]) => {
      const children = [];
      const adults = [];
      const idMap = [];
      for (const adult in adultResults) {
        const template = JSON.parse(JSON.stringify(at));
        template.client = encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult]));
        idMap.push({
          oldId: adultResults[adult].ClientID,
          newId: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult]))
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
          clientID: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult])),
          form: template
        });
      }
      for (const child in childResults) {
        const template = JSON.parse(JSON.stringify(ct));
        template.client = encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child]));
        idMap.push({
          oldId: childResults[child].ClientID,
          newId: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child]))
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
          clientID: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child])),
          form: template
        });
      }
      family._id = row.FamilyID.toString();
      family.child = children;
      family.adult = adults;
      family.idMap = idMap;
      // db.put(family).then(res => {
      //   console.log(res);
      // }).catch(err => console.log(err));

      // putPromises.push(db.put(family));
      bulkFamilies.push(family);
    }).catch(err => {
      console.log(err);
    })

  }
  setTimeout(() => {
    console.log("BULK FAMILY ARRAY FINISHED CREATING");
    // Promise.all(putPromises).then(reses => {
    //   console.log(reses);
    // }).catch(err => {
    //   console.log(err);
    // })
    console.log(`Total Families: ${bulkFamilies.length}`);
    const putBatches = []
    let tempBatch = []
    let c = 0;
    for (const family of bulkFamilies) {
      tempBatch.push(family);
      if (c % BATCH_SIZE == 0 && c > 0) {
        putBatches.push(tempBatch);
        tempBatch = [];
      }
      c++;
    }
    console.log(`Total Batches: ${putBatches.length}`)
    c = 0;
    const db = new PouchDB('https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families/');
    // db.bulkDocs(bulkFamilies).then(res => {
    //   console.log(res);
    // }).catch(err => { console.log(err) })
    for (const batch of putBatches) {
      let temp = JSON.parse(JSON.stringify(batch));
      setTimeout(() => {
        db.bulkDocs(temp).then(res => {
          console.log(`Batch #: ${c++}`);
        }).catch(err => {
          console.log(err);
        })
      }, 10000)
    }
    // Promise.all(putBatches.map(batch => {
    //   const db = new PouchDB('http://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families');
    //   return db.bulkDocs(batch).then(res => { return res }).catch(err => { return err })
    // })).then(responses => {
    //   console.log(responses.filter(res => { return res.errno }).length)
    // })
  }, 70000);

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const putPromises = null;
// //connection.connect(err => {
// // if (err) {
// //   console.log(err);
// // } else {
// console.log(`INFO: Database connection established - ${Date.now()}`);
// //get the ids of all the families in the database
// //connection.query(querys.familyIDList, (err, results, fields) => {
// console.log(
//   `INFO: Fetching distinct list of family id's - ${Date.now()}`
// );
// if (err) {
//   console.log(err);
// } else {
//   //results come back as RowDataPackets so we need to map through them to get FamilyID
//   let bulkFamilies = [];
//   let familyCount = 0;
//   let count = 0;
//   results.forEach(() => { familyCount++ });
//   results.forEach(row => {
//     //query to find all adults of a certain family
//     connection.query(
//       `SELECT * FROM adult WHERE FamilyID = ${row.FamilyID}`,
//       (err, adultResults, adultFields) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(
//             `INFO: Fetched adults for id ${row.FamilyID} - ${new Date(
//               Date.now()
//             )}`
//           );
//           const family = {
//             _id: null,
//             child: [],
//             adult: [],
//             idMap: []
//           };

//           connection.query(
//             `SELECT * FROM child WHERE FamilyID = ${row.FamilyID}`,
//             (err, childResults, childFields) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(
//                   `INFO: Fetched children for id ${
//                   row.FamilyID
//                   } - ${Date.now()}`
//                 );
//                 const children = [];
//                 const adults = [];
//                 const idMap = [];
//                 for (const adult in adultResults) {
//                   const template = JSON.parse(JSON.stringify(at));
//                   template.client = encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult]));
//                   idMap.push({
//                     oldId: adultResults[adult].ClientID,
//                     newId: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult]))
//                   })
//                   for (const prop in ak) {
//                     const index = ftools.indexQuestion(template, prop);
//                     const q = ftools.getQuestionByIndex(template, index);
//                     if (adultResults[adult][ak[prop]]) {
//                       q.input = adultResults[adult][ak[prop]];
//                     } else {
//                       q.input = "";
//                     }

//                   }
//                   adults.push({
//                     clientFName: adultResults[adult].First,
//                     clientLName: adultResults[adult].Last,
//                     clientID: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'adult', adult])),
//                     form: template
//                   });
//                 }
//                 for (const child in childResults) {
//                   const template = JSON.parse(JSON.stringify(ct));
//                   template.client = encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child]));
//                   idMap.push({
//                     oldId: childResults[child].ClientID,
//                     newId: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child]))
//                   });
//                   for (const prop in ck) {
//                     const index = ftools.indexQuestion(template, prop);
//                     const q = ftools.getQuestionByIndex(template, index);
//                     if (childResults[child][ck[prop]]) {
//                       q.input = childResults[child][ck[prop]];
//                     } else {
//                       q.input = "";
//                     }
//                   }
//                   children.push({
//                     clientFName: childResults[child].First,
//                     clientLName: childResults[child].Last,
//                     clientID: encodeURI(pouchCollate.toIndexableString([row.FamilyID.toString(), 'child', child])),
//                     form: template
//                   });
//                 }
//                 //add adults and children to family
//                 family._id = row.FamilyID.toString();
//                 family.child = children;
//                 family.adult = adults;
//                 family.idMap = idMap;
//                 bulkFamilies.push(family);
//                 count++;


//                 if (count % 10 == 0 && count != 0) {
//                   console.log("right before put");
//                   let bulkDocs = JSON.parse(JSON.stringify(bulkFamilies));
//                   putPromises.push(db.bulkDocs(bulkDocs))
//                   bulkFamilies = [];
//                 }

//               }
//             });
//         }
//       }
//     );
//   });

// }
// //});
// //}
// //});

