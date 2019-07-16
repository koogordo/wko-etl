exports.parentSurveyTemplate = JSON.parse(`{
    "formID": "54blankForm%004Parent%20Survey%00%00",
    "formRev": "",
    "name": "Parent Survey",
    "description": "",
    "client": "",
    "os": "",
    "allowedClientTypes": ["adult"],
    "status": [],
    "tabs": [
        {
            "name": "Parent Survey",
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
                                    "width": "320px",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "Visit Date",
                                            "label": "Date Of Survey",
                                            "labelPosition": "left",
                                            "labelWidth": "",
                                            "type": "date",
                                            "description": "",
                                            "required": false,
                                            "notes": [],
                                            "validators": null,
                                            "usePreviousValue": true,
                                            "input": "",
                                            "default": "",
                                            "maxDate": "",
                                            "minDate": "",
                                            "defaultToday": false,
                                            "placeholder": "Specify Date",
                                            "hint": ""
                                        }
                                    ],
                                    "align": "auto"
                                }
                            ]
                        },
                        {
                            "columnGap": "4.5%",
                            "columns": [
                                {
                                    "width": "40.5%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "PC Survey Score",
                                            "label": "Mom/PC Total Score",
                                            "labelPosition": "left",
                                            "labelWidth": "100px",
                                            "type": "input-map",
                                            "description": "",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "function": "add",
                                            "input": "",
                                            "notes": [],
                                            "indices": {
                                                "add": [
                                                    {
                                                        "key": "PC Q1 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q2 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q3 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 2
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q4 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 3
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q5 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 4
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q6 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 5
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q7 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 6
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q8 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 7
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q9 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 8
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PC Q10 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 9
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    "width": "40.5%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "PP Survey Score",
                                            "label": "Dad/PP Total Score",
                                            "labelPosition": "left",
                                            "labelWidth": "100px",
                                            "type": "input-map",
                                            "description": "",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "function": "add",
                                            "input": "",
                                            "notes": [],
                                            "indices": {
                                                "add": [
                                                    {
                                                        "key": "PP Q1 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q2 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q3 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 2
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q4 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 3
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q5 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 4
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q6 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 5
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q7 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 6
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q8 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 7
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q9 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 8
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "key": "PP Q10 Score",
                                                        "index": [
                                                            {
                                                                "type": "tab",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "section",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 9
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            },
                                                            {
                                                                "type": "row",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "column",
                                                                "index": 1
                                                            },
                                                            {
                                                                "type": "question",
                                                                "index": 0
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q1",
                                            "label": "1. Parent's Childhood Experience",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(Discipline, nurturer, domestic violence in the home, alcohol or substance abuse in the home, running away, sexual abuse)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q1 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q1 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q1 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q1 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q1 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q2",
                                            "label": "2. Lifestyle Behaviors and Mental Health",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(Drugs, Substance/Alcohol Use (remember to quantify), Mental Health, Criminal History)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q2 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q2 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q2 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q2 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q2 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q3",
                                            "label": "3. Parenting Experience",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(Experience with CPS in parenting, caretaking role, such as babysitter, stepparent, etc., and any prior experience with children in general)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q3 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q3 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q3 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q3 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q3 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q4",
                                            "label": "4. Coping Skills and Support System",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(Prenatal care, education, employment, transportation, phone access, lifelines, depression/sadness, coping strategies)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q4 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q4 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q4 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q4 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q4 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q5",
                                            "label": "5. Stresses",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(Relationship (between baby’s parents), Housing, Moves, Finances, Job Changes, Medical, Other)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q5 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q5 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q5 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q5 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q5 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q6",
                                            "label": "6. Anger Management Skills",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(with parenting partner and with others)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q6 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q6 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q6 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q6 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q6 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q7",
                                            "label": "7. Expectations of Infant's Developmental Milestones and Behaviors",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(Walking (and when to worry), toilet training (begins and when to worry), crying scenario (how long before responding, what would they try, what they would do if they’ve tried everything and baby still won’t stop crying), spoiling (including can you spoil a baby under 12 months)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q7 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q7 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q7 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q7 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q7 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q8",
                                            "label": "8. Plans for Discipline",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(Use of implements, if hitting, when they would start. For examples: Infant (baby under 1 year throwing food from high chair or crawling toward moveable object; Toddler (baby around 15-18 months old pushing buttons on TV; Child (child age 2-3 years refusing to do what parents ask, running toward a busy street.)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q8 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q8 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q8 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q8 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q8 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q9",
                                            "label": "9. Perception of New Infant",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(Baby’s personality or temperament)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q9 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q9 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q9 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q9 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q9 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Parent Survey Q10",
                                            "label": "10. Bonding and Attachment",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-group",
                                            "description": "(How they felt at first, how they feel now, married, impact on life)",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": null,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": 0,
                                                    "columns": [
                                                        {
                                                            "width": "100%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Parent Survey Q10 - Desc",
                                                                    "label": "",
                                                                    "labelPosition": "top",
                                                                    "labelWidth": "",
                                                                    "type": "textarea",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "columnGap": "5%",
                                                    "columns": [
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PC Q10 Score",
                                                                    "label": "Mom/PC",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PC Q10 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Mom/PC",
                                                                    "hint": "",
                                                                    "notes": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "width": "45%",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "PP Q10 Score",
                                                                    "label": "Dad/PP",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "radio-buttons",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "orientation": "horizontal",
                                                                    "specifyPosition": "right",
                                                                    "offset": "nogrow",
                                                                    "inorout": "in",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "value": "0",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "5",
                                                                            "value": "5",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "10",
                                                                            "value": "10",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "U-0",
                                                                            "value": "U",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        },
                                                                        {
                                                                            "key": "N/A-0",
                                                                            "value": "N/A",
                                                                            "specify": false,
                                                                            "labelWidth": "nogrow",
                                                                            "rows": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "key": "PP Q10 Score Reason",
                                                                    "label": "Reason for score",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "textbox",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "default": "",
                                                                    "placeholder": "Dad/PP",
                                                                    "hint": "",
                                                                    "notes": []
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
                            "columnGap": "0",
                            "columns": [
                                {
                                    "width": "90%",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Strengths and Protective Factors",
                                            "label": "Mom/PC (and/or) Dad/PP Strengths and Protective Factors",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "textarea",
                                            "description": "",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "input": "",
                                            "default": "",
                                            "placeholder": "",
                                            "hint": "",
                                            "notes": []
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
}
`);