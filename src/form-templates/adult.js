exports.adultTemplate = JSON.parse(`{
    "formID": "54blankForm%004Add%20Adult%00%00",
    "formRev": "",
    "name": "Parent",
    "description": "",
    "client": "",
    "os": "",
    "tabs": [
        {
            "name": "Add New Parent",
            "description": "",
            "sections": [
                {
                    "name": "",
                    "description": "",
                    "rows": [
                        {
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "280px",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "Date Parent Added",
                                            "label": "Date Parent Added",
                                            "labelPosition": "left",
                                            "labelWidth": "120px",
                                            "type": "date",
                                            "description": "",
                                            "required": false,
                                            "notes": [],
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": "Invalid date",
                                            "default": "",
                                            "maxDate": "",
                                            "minDate": "",
                                            "defaultToday": false,
                                            "placeholder": "",
                                            "hint": "",
                                            "initialLoad": false
                                        }
                                    ],
                                    "align": "auto"
                                }
                            ]
                        },
                        {
                            "columnGap": "20px",
                            "columns": [
                                {
                                    "width": "nogrow",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "Parent Name",
                                            "label": "Parent Name",
                                            "labelPosition": "left",
                                            "labelWidth": "120px",
                                            "type": "question-group",
                                            "description": "",
                                            "required": false,
                                            "notes": [],
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "rows": [
                                                {
                                                    "columnGap": "20px",
                                                    "columns": [
                                                        {
                                                            "width": "200px",
                                                            "offset": 0,
                                                            "questions": [
                                                                {
                                                                    "key": "Parent FName",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "notes": [],
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "First Name",
                                                                    "hint": "",
                                                                    "initialLoad": false
                                                                }
                                                            ],
                                                            "align": "auto"
                                                        },
                                                        {
                                                            "width": "200px",
                                                            "offset": 0,
                                                            "questions": [
                                                                {
                                                                    "key": "Parent LName",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "notes": [],
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Last Name",
                                                                    "hint": "",
                                                                    "initialLoad": false
                                                                }
                                                            ],
                                                            "align": "auto"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "input": null,
                                            "initialLoad": false
                                        }
                                    ],
                                    "align": "auto"
                                },
                                {
                                    "width": "nogrow",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "Name Changed",
                                            "label": "Name Updated?",
                                            "labelPosition": "left",
                                            "labelWidth": "",
                                            "type": "dropdown",
                                            "description": "",
                                            "required": false,
                                            "notes": [],
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "options": [
                                                {
                                                    "key": "No",
                                                    "value": "No",
                                                    "specify": false,
                                                    "rows": []
                                                },
                                                {
                                                    "key": "Yes",
                                                    "value": "Yes",
                                                    "specify": true,
                                                    "rows": [
                                                        {
                                                            "columnGap": 0,
                                                            "columns": [
                                                                {
                                                                    "width": "260px",
                                                                    "offset": 0,
                                                                    "questions": [
                                                                        {
                                                                            "key": "Date of Name Change",
                                                                            "label": "Date of Change",
                                                                            "labelPosition": "left",
                                                                            "labelWidth": "100px",
                                                                            "type": "date",
                                                                            "description": "",
                                                                            "required": false,
                                                                            "notes": [],
                                                                            "validators": null,
                                                                            "usePreviousValue": false,
                                                                            "input": "",
                                                                            "default": "",
                                                                            "maxDate": "",
                                                                            "minDate": "",
                                                                            "defaultToday": false,
                                                                            "placeholder": "",
                                                                            "hint": "",
                                                                            "initialLoad": false
                                                                        }
                                                                    ],
                                                                    "align": "auto"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "labelWidth": "nogrow"
                                                }
                                            ],
                                            "input": "No",
                                            "placeholder": "",
                                            "hint": "",
                                            "default": "No",
                                            "specifyPosition": "",
                                            "dropdownWidth": "60px",
                                            "initialLoad": false
                                        }
                                    ],
                                    "align": "auto"
                                }
                            ]
                        },
                        {
                            "columnGap": "40px",
                            "columns": [
                                {
                                    "width": "310px",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "Parent SSN",
                                            "label": "Social Security Number",
                                            "labelPosition": "left",
                                            "labelWidth": "120px",
                                            "type": "ssn",
                                            "description": "",
                                            "required": false,
                                            "notes": [],
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": "",
                                            "placeholder": "",
                                            "hint": "",
                                            "initialLoad": false
                                        }
                                    ],
                                    "align": "auto"
                                },
                                {
                                    "width": "nogrow",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "SSN Updated",
                                            "label": "SSN Updated?",
                                            "labelPosition": "left",
                                            "labelWidth": "",
                                            "type": "dropdown",
                                            "description": "",
                                            "required": false,
                                            "notes": [],
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "options": [
                                                {
                                                    "key": "No",
                                                    "value": "No",
                                                    "specify": false,
                                                    "rows": []
                                                },
                                                {
                                                    "key": "Yes",
                                                    "value": "Yes",
                                                    "specify": true,
                                                    "rows": [
                                                        {
                                                            "columnGap": 0,
                                                            "columns": [
                                                                {
                                                                    "width": "260px",
                                                                    "offset": 0,
                                                                    "questions": [
                                                                        {
                                                                            "key": "Date SSN Changed",
                                                                            "label": "Date of Change",
                                                                            "labelPosition": "left",
                                                                            "labelWidth": "100px",
                                                                            "type": "date",
                                                                            "description": "",
                                                                            "required": false,
                                                                            "notes": [],
                                                                            "validators": null,
                                                                            "usePreviousValue": false,
                                                                            "input": "",
                                                                            "default": "",
                                                                            "maxDate": "",
                                                                            "minDate": "",
                                                                            "defaultToday": false,
                                                                            "placeholder": "",
                                                                            "hint": "",
                                                                            "initialLoad": false
                                                                        }
                                                                    ],
                                                                    "align": "auto"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "labelWidth": "nogrow"
                                                }
                                            ],
                                            "input": "No",
                                            "placeholder": "",
                                            "hint": "",
                                            "default": "No",
                                            "specifyPosition": "",
                                            "dropdownWidth": "60px",
                                            "initialLoad": false
                                        }
                                    ],
                                    "align": "auto"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "status": [],
    "allowedClientTypes": []
}
`);
