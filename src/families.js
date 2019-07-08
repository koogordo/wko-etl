'use strict';
const mysql = require('mysql');
const request = require('request');
const PouchDB = require('pouchdb');
const pouchCollate = require('pouchdb-collate');
const at = require('./form-templates/adult').adultTemplate;
const ct = require('./form-templates/child').childTemplate;
const ak = require('./keymaps/adultkeys').adultKeys;
const ck = require('./keymaps/childkeys').childKeys;
const ftools = require('./wko-forms');
const db = new PouchDB(
  "https://koogordo:wK0mI55ghBU9pp@hfatracking.net/couchdb/families"
);
const querys = {
  familyIDList: 'SELECT DISTINCT FamilyID FROM adult ORDER BY FamilyID DESC LIMIT 3'
};
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'GBP@ck3rs#1',
  database: 'wko'
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`INFO: Database connection established - ${Date.now()}`);
    //get the ids of all the families in the database
    connection.query(querys.familyIDList, (err, results, fields) => {
      console.log(
        `INFO: Fetching distinct list of family id's - ${Date.now()}`
      );
      if (err) {
        console.log(err);
      } else {
        //results come back as RowDataPackets so we need to map through them to get FamilyID
        results.map(row => {
          //query to find all adults of a certain family
          console.log(
            `INFO: Querying database for adults and children based on each family id - ${Date.now()}`
          );
          connection.query(
            `SELECT * FROM adult WHERE FamilyID = ${row.FamilyID}`,
            (err, adultResults, adultFields) => {
              if (err) {
                console.log(err);
              } else {
                console.log(
                  `INFO: Fetched adults for id ${row.FamilyID} - ${new Date(
                    Date.now()
                  )}`
                );
                const family = {
                  _id: null,
                  child: [],
                  adult: []
                };

                connection.query(
                  `SELECT * FROM child WHERE FamilyID = ${row.FamilyID}`,
                  (err, childResults, childFields) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(
                        `INFO: Fetched children for id ${
                        row.FamilyID
                        } - ${Date.now()}`
                      );
                      const children = [];
                      const adults = [];
                      for (const adult in adultResults) {
                        const template = JSON.parse(JSON.stringify(at));
                        template.client = encodeURI(pouchCollate.toIndexableString([row.FamilyID, 'adult', adult]));
                        for (const prop in ak) {
                          const index = ftools.indexQuestion(template, prop);
                          const q = ftools.getQuestionByIndex(template, index);
                          console.log(q);
                          console.log(adultResults[adult][ak[prop]]);
                          if (adultResults[adult][ak[prop]]) {
                            q.input = adultResults[adult][ak[prop]];
                          } else {
                            q.input = "";
                          }

                        }
                        adults.push({
                          clientFName: titleCase(adultResults[adult].First),
                          clientLName: titleCase(adultResults[adult].Last),
                          form: template
                        });
                      }
                      for (const child in childResults) {
                        const template = JSON.parse(JSON.stringify(ct));
                        template.client = encodeURI(pouchCollate.toIndexableString([row.FamilyID, 'child', child]));
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
                          clientFName: titleCase(childResults[child].First),
                          clientLName: titleCase(childResults[child].Last),
                          form: template
                        });
                      }
                      //add adults and children to family
                      family._id = row.FamilyID.toString();
                      family.child = children;
                      family.adult = adults;
                      db.put(family)
                        .then(res => {
                          console.log(res);
                        })
                        .catch(err => console.log(err));
                    }
                  }
                );
              }
            }
          );
        });
      }
    });
  }
});

// Helper Functions
function titleCase(word) {
  let lowercaseWord = word.toLowerCase();
  let splitWord = lowercaseWord.split('');
  splitWord[0] = splitWord[0].toUpperCase();
  let joinedWord = splitWord.join('');
  return joinedWord;
}
