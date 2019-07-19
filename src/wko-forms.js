const pouchCollate = require('pouchdb-collate');
const moment = require('moment');
const indexFormPartChildren = (formPartChildren, key, index) => {
    for (const childIndex in formPartChildren) {
        let tempIndex = index;
        tempIndex[tempIndex.length - 1].index = childIndex;
        const temp = exports.indexQuestion(formPartChildren[childIndex], key, tempIndex);
        if (temp) {
            return temp;
        }
    }
    return null;
}
exports.makeVisitId = (clientID, visitDate) => {
    const parsedID = pouchCollate.parseIndexableString(decodeURI(clientID));
    const indexable = pouchCollate.toIndexableString([parsedID[0], parsedID[1], parsedID[2], visitDate, form.name, moment().unix()])
    const encoded = encodeURI(indexable);
    return encoded;
}
exports.indexQuestion = (fgValue, key, indexc = []) => {
    const index = JSON.parse(JSON.stringify(indexc));
    if (fgValue.key === key) {
        return index;
    }

    if (fgValue.tabs) {
        index.push({ type: 'tab' });
        return indexFormPartChildren(fgValue.tabs, key, index);
    } else if (fgValue.sections) {
        index.push({ type: 'section' });
        return indexFormPartChildren(fgValue.sections, key, index);
    } else if (fgValue.rows && fgValue.type !== 'question-array') {
        index.push({ type: 'row' });
        return indexFormPartChildren(fgValue.rows, key, index);
    } else if (fgValue.input && fgValue.type === 'question-array') {
        index.push({ type: 'input' });
        return indexFormPartChildren(fgValue.input, key, index);
        // return indexFormPartChildren(fgValue.input[0].rows, key, index);
    } else if (fgValue.columns) {
        index.push({ type: 'column' });
        return indexFormPartChildren(fgValue.columns, key, index);
    } else if (fgValue.options) {
        index.push({ type: 'option' });
        return indexFormPartChildren(fgValue.options, key, index);
    } else if (fgValue.questions) {
        index.push({ type: 'question' });
        return indexFormPartChildren(fgValue.questions, key, index);
    } else {
        return null;
    }
}

exports.getQuestionByIndex = (fgValue, indexc) => {
    const index = JSON.parse(JSON.stringify(indexc));
    const itype = index[0].type;

    if (itype === 'tab') {
        const tabIndex = index.splice(0, 1);
        if (index.length === 0) {
            return fgValue.questions[tabIndex[0].index];
        } else {
            return exports.getQuestionByIndex(fgValue.tabs[tabIndex[0].index], index);
        }
    } else if (itype === 'section') {
        const sectIndex = index.splice(0, 1);
        if (index.length === 0) {
            return fgValue.questions[sectIndex[0].index];
        } else {
            return exports.getQuestionByIndex(fgValue.sections[sectIndex[0].index], index);
        }
    } else if (itype === 'input') {
        const inputIndex = index.splice(0, 1);
        const rowIndex = index.splice(0, 1);
        if (index.length === 0) {
            return fgValue.questions[inputIndex[0].index];
        } else {
            return exports.getQuestionByIndex(fgValue.input[inputIndex[0].index].rows[rowIndex[0].index], index);
        }
    } else if (itype === 'row') {
        const rowIndex = index.splice(0, 1);
        if (index.length === 0) {
            return fgValue.questions[rowIndex[0].index];
        } else {
            return exports.getQuestionByIndex(fgValue.rows[rowIndex[0].index], index);
        }
    } else if (itype === 'option') {
        const optIndex = index.splice(0, 1);
        if (index.length === 0) {
            return fgValue.questions[optIndex[0].index];
        } else {
            return exports.getQuestionByIndex(fgValue.options[optIndex[0].index], index);
        }
    } else if (itype === 'column') {
        const colIndex = index.splice(0, 1);
        if (index.length === 0) {
            return fgValue.questions[colIndex[0].index];
        } else {
            return exports.getQuestionByIndex(fgValue.columns[colIndex[0].index], index);
        }
    } else if (itype === 'question') {
        const queIndex = index.splice(0, 1);
        if (index.length === 0) {
            return fgValue.questions[queIndex[0].index];
        } else {
            return exports.getQuestionByIndex(fgValue.questions[queIndex[0].index], index);
        }
    } else {
        return null;
    }
}
/////////////////////////////////////////////////////////////////////
exports.compress = (form, compressedForm) => {
    if (Object.keys(compressedForm).length === 0) {
        for (const prop in form) {
            if (prop !== 'tabs') {
                compressedForm[prop] = form[prop];
            }
        }
        compressedForm.contents = [];
    }
    if (form.tabs) {
        for (const tabControl of form.tabs) {
            this.compress(tabControl, compressedForm);
        }
    } else if (form.sections) {
        for (const sectionControl of form.sections) {
            this.compress(sectionControl, compressedForm);
        }
    } else if (form.rows && form.type === 'question-array') {
        // (form as form).addControl('initialLoad', new FormControl(true));

        for (const inputControl of form.controls.input.controls) {
            for (const rowControl of inputControl.rows) {
                this.compress(rowControl, compressedForm);
            }
        }
    } else if (form.rows && form.type !== 'question-array') {
        for (const rowControl of form.rows) {
            this.compress(rowControl, compressedForm);
        }
    } else if (form.columns) {
        for (const columnControl of form.columns) {
            // console.log(columnControl);
            this.compress(columnControl, compressedForm);
        }
    } else if (form.options) {
        for (const optionControl of form.options) {
            this.compress(optionControl, compressedForm);
        }
    } else if (form.questions) {
        form.questions.forEach((question) => {
            compressedForm.contents.push({
                key: question.key,
                value: question.input,
                notes: question.notes || [],
            });
            if (question.options) {
                for (const optionControl of question.options) {
                    if (optionControl.rows.length > 0) {
                        this.compress(optionControl, compressedForm);
                    }
                }
            } else if (question.rows && question.type === 'question-array') {
                for (const inputControl of question.input) {
                    for (const rowControl of inputControl.rows) {
                        this.compress(rowControl, compressedForm);
                    }
                }
            } else if (question.rows && question.type !== 'question-array') {
                for (const rowControl of question.rows) {
                    this.compress(rowControl, compressedForm);
                }
            }
        });
    }
    return compressedForm;
}
/////////////////////////////////////////////////////////////////////
exports.mapDirect = (question, map, sqlData) => {
    console.log("map direct: ", map);
    if (map.field) {
        question.input = sqlData[map.field]
    } else if (map.value) {
        question.input = map.value
    }
}
exports.mapQuestionArray = (question, map, sqlData) => {
    const newInputs = [];
    for (const input of map.inputs) {
        const newInput = JSON.parse(JSON.stringify(question.rows[0]))
        console.log(input)
        for (const key in input) {
            console.log(key);
            const index = exports.indexQuestion(newInput, key);
            const q = exports.getQuestionByIndex(newInput, index);
            if (input[key].field) {
                q.input = sqlData[input[key].field]
                newInput.key = `${key}-${input[key].field}`
            } else if (input[key].value) {
                q.input = input[key].value
            }
        }
        console.log(newInput);
        newInputs.push(newInput);
    }
    question.input = newInputs;
}

exports.mapBiConditional = (question, keyMap, sqlData) => {
    if (sqlData[keyMap['if']]) {
        question.input = 'Yes'
    } else {
        question.input = 'No'
    }
}

// exports.mapTriConditional = (question, keyMap, sqlData) => {
//     if (sqlData[keyMap['if']]) {
//         question.input = 'Yes';
//     } else if (sqlData[keyMap['elif']]) {
//         question.input = 'No';
//     }
// }


