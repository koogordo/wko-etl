exports.contactLogTemplate = JSON.parse(`{
    "formID": "54blankForm%004Contact%20Log%00%00",
    "formRev": "",
    "name": "Contact Log",
    "description": "",
    "client": "",
    "os": "",
    "allowedClientTypes": ["family", "adult", "child"],
    "status": [],
    "tabs": [
        {
            "name": "Contact Log",
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
                                    "width": "260px",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "Visit Date",
                                            "label": "Today's Date",
                                            "labelPosition": "left",
                                            "labelWidth": "90px",
                                            "type": "date",
                                            "description": "",
                                            "required": true,
                                            "notes": [],
                                            "validators": {
                                                "description": "Required"
                                            },
                                            "usePreviousValue": true,
                                            "input": "Invalid date",
                                            "default": "",
                                            "maxDate": "",
                                            "minDate": "",
                                            "defaultToday": false,
                                            "placeholder": "Date",
                                            "hint": "",
                                            "initialLoad": false
                                        }
                                    ],
                                    "align": "auto"
                                }
                            ]
                        },
                        {
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "nogrow",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "Contact Attempts",
                                            "label": "Contact Attempts",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-array",
                                            "description": "",
                                            "required": false,
                                            "notes": [],
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "300px",
                                                            "offset": "20px",
                                                            "questions": [
                                                                {
                                                                    "key": "Contact Date",
                                                                    "label": "Date of Attempt",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "110px",
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
                                                                    "placeholder": "Date",
                                                                    "hint": ""
                                                                }
                                                            ],
                                                            "align": "auto"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "620px",
                                                            "offset": "20px",
                                                            "questions": [
                                                                {
                                                                    "key": "Contact Notes",
                                                                    "label": "Attempt Details",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "110px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "notes": [],
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Specify",
                                                                    "hint": ""
                                                                }
                                                            ],
                                                            "align": "auto"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "addButtonText": "+ Add Contact Attempt",
                                            "removable": false,
                                            "initialLoad": false,
                                            "input": [
                                                {
                                                    "rows": [
                                                        {
                                                            "columnGap": 0,
                                                            "columns": [
                                                                {
                                                                    "width": "300px",
                                                                    "offset": "20px",
                                                                    "questions": [
                                                                        {
                                                                            "key": "Contact Date",
                                                                            "label": "Date of Attempt",
                                                                            "labelPosition": "left",
                                                                            "labelWidth": "110px",
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
                                                                            "placeholder": "Date",
                                                                            "hint": ""
                                                                        }
                                                                    ],
                                                                    "align": "auto"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "columnGap": 0,
                                                            "columns": [
                                                                {
                                                                    "width": "620px",
                                                                    "offset": "20px",
                                                                    "questions": [
                                                                        {
                                                                            "key": "Contact Notes",
                                                                            "label": "Attempt Details",
                                                                            "labelPosition": "left",
                                                                            "labelWidth": "110px",
                                                                            "type": "textbox",
                                                                            "description": "",
                                                                            "required": false,
                                                                            "notes": [],
                                                                            "validators": null,
                                                                            "usePreviousValue": false,
                                                                            "input": "",
                                                                            "default": "",
                                                                            "placeholder": "Specify",
                                                                            "hint": ""
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
                                    "align": "auto"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
`);