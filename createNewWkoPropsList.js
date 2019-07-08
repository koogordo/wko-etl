const dir = require('node-dir');

const getKeys = (formNode, acc) => {
    if (formNode.tabs) {
        for (const tabControl of formNode.tabs) {
            getKeys(tabControl, acc);
        }
    } else if (formNode.sections) {
        for (const sectionControl of formNode.sections) {
            getKeys(sectionControl, acc);
        }
    } else if (formNode.rows && formNode.type === 'question-array') {
        // (form as form).addControl('initialLoad', new FormControl(true));

        for (const inputControl of formNode.input) {
            for (const rowControl of inputControl.rows) {
                getKeys(rowControl, acc);
            }
        }
    } else if (formNode.rows && formNode.type !== 'question-array') {
        for (const rowControl of formNode.rows) {
            getKeys(rowControl, acc);
        }
    } else if (formNode.columns) {
        for (const columnControl of formNode.columns) {
            // console.log(columnControl);
            getKeys(columnControl, acc);
        }
    } else if (formNode.options) {
        for (const optionControl of formNode.options) {
            getKeys(optionControl, acc);
        }
    } else if (formNode.questions) {
        formNode.questions.forEach((question) => {
            // acc.push({ key: question.key, label: question.label, type: question.type });
            acc[question.key] = '';
            if (question.options) {
                for (const optionControl of question.options) {
                    if (optionControl.rows.length > 0) {
                        getKeys(optionControl, acc);
                    }
                }
            } else if (question.rows && question.type === 'question-array') {
                for (const inputControl of question.input) {
                    for (const rowControl of inputControl.rows) {
                        getKeys(rowControl, acc);
                    }
                }
            } else if (question.rows && question.type !== 'question-array') {
                for (const rowControl of question.rows) {
                    getKeys(rowControl, acc);
                }
            }
        });
    }
};

const jsonFilePaths = dir.files('proplists/wko-new/json', { sync: true });
jsonFilePaths.forEach((path) => {
    const formJson = require('fs').readFileSync(path);
    const formNode = JSON.parse(formJson);
    const keys = {};

    getKeys(formNode, keys);
    const writeStream = require('fs').createWriteStream(
        `proplists/wko-new/props-list/${formNode.name
            .split(' ')
            .join('')
            .toLowerCase()}_keys.json`
    );
    //const wkoFiles = ['wko/adult.txt', 'wko/adult2.txt', 'wko/adultvisits.txt', 'wko/adultvisits2.txt', 'wko/asq.txt', 'wko/contact.txt', 'wko/employee.txt', 'wko/child.txt', 'wko/childvisits.txt'];
    const pathName = writeStream.path;
    // write each value of the array on the file breaking line
    //keys.forEach((value) => writeStream.write(`${value}\n`));
    writeStream.write(JSON.stringify(keys));
    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on('finish', () => {
        console.log(`wrote all the array data to file ${pathName}`);
    });

    // handle the errors on the write process
    writeStream.on('error', (err) => {
        console.error(`There is an error writing the file ${pathName} => ${err}`);
    });

    // close the stream
    writeStream.end();
});
