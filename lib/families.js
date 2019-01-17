'use strict';
const mysql = require('mysql');
const request = require('request');
const PouchDB = require('pouchdb');
const db = new PouchDB(
  'http://wkoformbuilder.eastus.cloudapp.azure.com/couchdb/families'
);
const querys = {
  familyIDList: 'SELECT DISTINCT FamilyID from adult'
};
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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
                      var children = [];
                      var adults = [];
                      adultResults.map(adult => {
                        adults.push({
                          clientFName: titleCase(adult.First),
                          clientLName: titleCase(adult.Last),
                          form: {
                            formID: '54blankForm%004Add%20Adult%00%00',
                            formRev: '4-98e47cb24023a28ad77da737f7cbb213',
                            name: 'Add Adult',
                            description: '',
                            client: '541%004adult%00323246%00%00',
                            os: '',
                            tabs: [
                              {
                                name: 'Add Client',
                                description: '',
                                sections: [
                                  {
                                    name: '',
                                    description: '',
                                    rows: [
                                      {
                                        columnGap: '0',
                                        columns: [
                                          {
                                            width: 'nogrow',
                                            offset: 0,
                                            align: 'auto',
                                            questions: [
                                              {
                                                key: 'Client Name',
                                                label: 'Client Name',
                                                labelPosition: 'left',
                                                labelWidth: '100px',
                                                type: 'question-group',
                                                description: '',
                                                required: false,
                                                validators: null,
                                                usePreviousValue: false,
                                                input: null,
                                                rows: [
                                                  {
                                                    columnGap: '20px',
                                                    columns: [
                                                      {
                                                        width: '200px',
                                                        offset: 0,
                                                        align: 'auto',
                                                        questions: [
                                                          {
                                                            key: 'Client FName',
                                                            label: '',
                                                            labelPosition:
                                                              'top',
                                                            labelWidth: '',
                                                            type: 'textbox',
                                                            description: '',
                                                            required: false,
                                                            validators: null,
                                                            usePreviousValue: false,
                                                            input: titleCase(
                                                              adult.First
                                                            ),
                                                            default: '',
                                                            placeholder:
                                                              'First Name',
                                                            hint: '',
                                                            notes: []
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        width: '200px',
                                                        offset: 0,
                                                        align: 'auto',
                                                        questions: [
                                                          {
                                                            key: 'Client LName',
                                                            label: '',
                                                            labelPosition:
                                                              'top',
                                                            labelWidth: '',
                                                            type: 'textbox',
                                                            description: '',
                                                            required: false,
                                                            validators: null,
                                                            usePreviousValue: false,
                                                            input: titleCase(
                                                              adult.Last
                                                            ),
                                                            default: '',
                                                            placeholder:
                                                              'Last Name',
                                                            hint: '',
                                                            notes: []
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ],
                                                notes: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        columnGap: '0',
                                        columns: [
                                          {
                                            width: '310px',
                                            offset: 0,
                                            align: 'auto',
                                            questions: [
                                              {
                                                key: 'SSN',
                                                label: 'Social Security Number',
                                                labelPosition: 'left',
                                                labelWidth: '100px',
                                                type: 'ssn',
                                                description: '',
                                                required: false,
                                                validators: null,
                                                usePreviousValue: false,
                                                input: adult.SSN,
                                                placeholder: '',
                                                hint: '',
                                                notes: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ],
                            status: [],
                            allowedClientTypes: []
                          }
                        });
                      });
                      childResults.map(child => {
                        children.push({
                          clientFName: titleCase(child.First),
                          clientLName: titleCase(child.Last),
                          form: {
                            formID: '54blankForm%004Add%20Child%00%00',
                            formRev: '3-2aecf518f5dc456289ac8ad217f08a4d',
                            name: 'Add Child',
                            description: '',
                            client: '541%004child%0040%00%00',
                            os: '',
                            tabs: [
                              {
                                name: 'Add Child',
                                description: '',
                                sections: [
                                  {
                                    name: '',
                                    description: '',
                                    rows: [
                                      {
                                        columnGap: '0',
                                        columns: [
                                          {
                                            width: 'nogrow',
                                            offset: 0,
                                            align: 'auto',
                                            questions: [
                                              {
                                                key: 'Child Name',
                                                label: 'Child Name',
                                                labelPosition: 'left',
                                                labelWidth: '100px',
                                                type: 'question-group',
                                                description: '',
                                                required: false,
                                                validators: null,
                                                usePreviousValue: false,
                                                input: null,
                                                notes: [],
                                                rows: [
                                                  {
                                                    columnGap: '20px',
                                                    columns: [
                                                      {
                                                        width: '200px',
                                                        offset: 0,
                                                        align: 'auto',
                                                        questions: [
                                                          {
                                                            key: 'Child FName',
                                                            label: '',
                                                            labelPosition:
                                                              'top',
                                                            labelWidth: '',
                                                            type: 'textbox',
                                                            description: '',
                                                            required: false,
                                                            validators: null,
                                                            usePreviousValue: false,
                                                            input: titleCase(
                                                              child.First
                                                            ),
                                                            default: '',
                                                            placeholder:
                                                              'First Name',
                                                            hint: '',
                                                            notes: []
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        width: '200px',
                                                        offset: 0,
                                                        align: 'auto',
                                                        questions: [
                                                          {
                                                            key: 'Child LName',
                                                            label: '',
                                                            labelPosition:
                                                              'top',
                                                            labelWidth: '',
                                                            type: 'textbox',
                                                            description: '',
                                                            required: false,
                                                            validators: null,
                                                            usePreviousValue: false,
                                                            input: titleCase(
                                                              child.Last
                                                            ),
                                                            default: '',
                                                            placeholder:
                                                              'Last Name',
                                                            hint: '',
                                                            notes: []
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        columnGap: '0',
                                        columns: [
                                          {
                                            width: '310px',
                                            offset: 0,
                                            align: 'auto',
                                            questions: [
                                              {
                                                key: 'SSN',
                                                label: 'Social Security Number',
                                                labelPosition: 'left',
                                                labelWidth: '100px',
                                                type: 'ssn',
                                                description: '',
                                                required: false,
                                                validators: null,
                                                usePreviousValue: false,
                                                input: child.SSN,
                                                placeholder: '',
                                                hint: '',
                                                notes: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ],
                            status: [],
                            allowedClientTypes: []
                          }
                        });
                      });
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
