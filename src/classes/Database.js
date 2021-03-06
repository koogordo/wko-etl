const mysql = require('mysql');
export class Database {
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