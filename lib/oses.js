'use strict';
const mysql = require('mysql');
const request = require('request');
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-authentication'));
const _adminDb = new PouchDB(
  'http://wkoformbuilder.eastus.cloudapp.azure.com/couchdb/koogordo'
);
const _userDb = new PouchDB(
  'http://wkoformbuilder.eastus.cloudapp.azure.com/couchdb/_users'
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

//after login start work
connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      `INFO: Connection to database established - ${new Date(Date.now())}`
    );
    //connected to database now get all unique WKOID's
    connection.query(
      `SELECT DISTINCT WKOID FROM adult UNION SELECT DISTINCT WKOID FROM child`,
      (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          results.map(wkoid => {
            var remoteDb = new PouchDB(
              `http://koogordo:19Liberty95!@wkoformbuilder.eastus.cloudapp.azure.com/couchdb/os${
                wkoid.WKOID
              }`
            );
            remoteDb.signUp(
              `os${wkoid.WKOID}`,
              'testpass',
              { roles: ['OS'] },
              (err, res) => {
                if (err) {
                  //handle signup err
                  console.log(err);
                } else {
                  //signup successful so do work to grab all families for each os

                  console.log(res);
                  connection.query(
                    `SELECT DISTINCT FamilyID FROM adult WHERE WKOID = ${
                      wkoid.WKOID
                    }`,
                    (err, results, fields) => {
                      if (err) {
                        //unsuccessful query to get familyIDs
                        console.log(err);
                      } else {
                        //familyID query for current os was successful
                        var clients = [];
                        results.map(row => {
                          clients.push({ familyID: `${row.FamilyID}` });
                        });
                        remoteDb
                          .put({ _id: 'clients', clients })
                          .then(res => {
                            console.log(res);
                          })
                          .catch(err => {
                            console.log(err);
                          });
                      }
                    }
                  );
                }
              }
            );
          });
        }
      }
    );
  }
});
