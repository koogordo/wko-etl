const ftools = require('./wko-forms');
const wko = require('./db').wko;
const avt = require('./form-templates/adultvisit').aVisitTemplate;
const cvt = require('./form-templates/childvisit').cVisitTemplate;
const at = require('./form-templates/adult').adultTemplate;
const ct = require('./form-templates/child').childTemplate;
const clt = require('./form-templates/contactlog').contactLogTemplate;
const cmt = require('./form-templates/contactmethods').contactMethodsTemplate;
const mvt = require('./form-templates/missedvisit').missedVisitsTemplate;
const pst = require('./form-templates/parentsurvey').parentSurveyTemplate;
const tt = require('./form-templates/termination').terminationTemplate;

const avk = require('./keymaps/adultvisitkeys').adultVisitKeys;
const cvk = require('./keymaps/childvisitkeys').childVisitKeys;
const ak = require('./keymaps/adultkeys').adultKeys;
const ck = require('./keymaps/childkeys').childKeys;
const clk = require('./keymaps/contactlogkeys').contactLogKeys;
const cmk = require('./keymaps/contactmethodskeys').contactMethodsKeys;
const mvk = require('./keymaps/missedvisitkeys').missedVisitKeys;
const psk = require('./keymaps/parentsurveykeys').parentSurveyKeys;
const tk = require('./keymaps/closurekeys').closureKeys;

for (prop in cvk) {
    const index = ftools.indexQuestion(cvt, prop);
    const q = ftools.getQuestionByIndex(cvt, index);
    break;
}