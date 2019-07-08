exports.missedVisitsTemplate = JSON.parse(`{
    "formID": "54blankForm%004Missed%20Visit%00%00",
    "formRev": "",
    "name": "Missed Visit",
    "description": "",
    "client": "",
    "os": "",
    "tabs": [
        {
            "name": "Missed Visit",
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
                                            "label": "Missed Visit Date",
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
                            "columnGap": 0,
                            "columns": [
                                {
                                    "width": "600px",
                                    "offset": 0,
                                    "questions": [
                                        {
                                            "key": "Reason",
                                            "label": "Reason Given",
                                            "labelPosition": "left",
                                            "labelWidth": "110px",
                                            "type": "textarea",
                                            "description": "",
                                            "required": false,
                                            "notes": [],
                                            "validators": null,
                                            "usePreviousValue": true,
                                            "input": "",
                                            "default": "",
                                            "placeholder": "",
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
    "status": [],
    "allowedClientTypes": ["adult", "child"]
}
`);