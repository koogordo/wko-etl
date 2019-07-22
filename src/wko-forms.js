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
exports.makeVisitId = (clientID, visitDate, form) => {
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
    if (map['field']) {
        question.input = sqlData[map['field']]
    } else if (map.value) {
        question.input = map['value']
    }
}
exports.mapQuestionArray = (question, map, sqlData) => {
    const newInputs = [];
    const newInputArray = []
    for (const input of map.inputs) {
        const newInput = JSON.parse(JSON.stringify({ rows: question.rows }))

        for (const key in input) {
            const keyType = input[key]['type']
            const columnName = input[key]['field']
            const index = exports.indexQuestion(newInput, key);
            //console.log(key, index, input[key]);
            const q = exports.getQuestionByIndex(newInput, index);

            switch (keyType) {
                case 'direct': exports.mapDirect(q, input[key], sqlData)
                    break;
                case 'question-array': exports.mapQuestionArray(q, input[key], sqlData)
                    break;
                case 'checkboxes': exports.mapCheckboxes(q, input[key], sqlData)
                    break;
                case 'radio': exports.mapRadio(q, input[key], sqlData)
                    break;
                case 'input-map': exports.mapInputMap(q, input[key], sqlData)
                    break;
                case 'conditional': exports.mapConditional(q, input[key], sqlData)
                    break;
            }
            if (input[key].field) {
                q.input = sqlData[input[key].field]
                q.key = `${key}-${input[key].field}`
            } else if (input[key].value) {
                q.input = input[key].value
                q.key = `${key}-${input[key].value}`
            }
        }
        newInputArray.push(newInput)
    }
    question.input = newInputArray;
}

exports.mapConditional = (question, keyMap, sqlData) => {
    if (sqlData[keyMap['if']['field']]) {
        if (keyMap['then']['value']) {
            question.input = keyMap['then']['value'];
        } else {
            question.input = sqlData[keyMap['then']['field']]
        }
    } else {
        if (keyMap['else']['value']) {
            question.input = keyMap['else']['value'];
        } else {
            question.input = sqlData[keyMap['else']['field']]
        }
    }
}

exports.mapRadio = (question, map, sqlData) => {
    if (map['field']) {
        const oldDbVal = sqlData[map['field']];
        console.log('radio: ', oldDbVal)
        let value;
        if (oldDbVal) {
            value = question.options.filter(opt => {
                return ((opt.value.toLowerCase().includes(oldDbVal.split('|').join('').toLowerCase())) || (oldDbVal.split('|').join('').toLowerCase().includes(opt.value.toLowerCase())));
            })[0].value;
            if (!value) {
                question.options.push({ key: oldDbVal.split('|').join(''), value: oldDbVal.split('|').join(''), specify: false, labelWidth: 'nogrow', rows: [] })
                value = oldDbVal.split('|').join('');
            }
        } else {
            value = '';
        }
        question.input = value;
    } else {
        question.input = map['value']
    }
}

exports.mapCheckboxes = (question, map, sqlData) => {
    const optionsInput = []
    question.options.forEach(opt => { optionsInput.push(false) })
    if (map['field']) {
        const oldDbVal = sqlData[map['field']];
        if (oldDbVal) {
            const fieldVals = oldDbVal.split('|')
            console.log(fieldVals);
            for (const val of fieldVals) {
                let matchFound = false;
                for (let i = 0; i < question.options.length; i++) {
                    // question.options[i].value.toLowerCase().includes(val.toLowerCase())
                    if ((val.toLowerCase().includes(question.options[i].value.toLowerCase())) || (question.options[i].value.toLowerCase().includes(val.toLowerCase()))) {
                        console.log(question.options[0]);
                        console.log(question.options[i].value)
                        optionsInput[i] = true;
                        matchFound = true;
                    } else {
                        if (oldDbVal == 1) {
                            optionsInput[0] = true;
                            matchFound = true;
                        }
                    }
                }
                if (!matchFound) {
                    question.options.push({ key: val, value: val, specify: false, rows: [] })
                    optionsInput.push(true);
                }

            }

        } else {
            optionsInput[0] = false;
        }
        question.input = optionsInput;
    } else {
        question.input = map['value'];
    }
}

exports.mapInputMap = (question, map, sqlData) => {
    /*   {
     *      "type":"input-map",
     *      "function":"timeDuration",
     *      "args": [{"field":"StartTime"},{"field":"EndTime"}]
     *   }
     */
    switch (map['function']) {
        case 'timeDuration': question.input = timeDuration(map['args'][0]['field'] ? sqlData[map['args'][0]['field']] : map['args'][0]['value'], map['args'][1]['field'] ? sqlData[map['args'][1]['field']] : map['args'][1]['value'])
            break;
    }
}

// ANCHOR INPUT MAP FUNCTIONS
const timeDuration = (startTime, endTime) => {
    const start = moment(startTime, 'HH:mm');
    const end = moment(endTime, 'HH:mm');
    var duration = end.diff(start, 'seconds');
    var totalMins = duration / 60;
    var durationMins = totalMins % 60;
    var durationHours = (totalMins - durationMins) / 60;
    return durationHours + ' hour(s), ' + durationMins + ' minute(s)';
}
