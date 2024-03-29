exports.contactMethodsTemplate = JSON.parse(`{
    "formID": "",
    "formRev": "",
    "name": "Contact Methods",
    "description": "",
    "client": "",
    "os": "",
    "tabs": [
        {
            "name": "Contact Methods",
            "description": "",
            "sections": [
                {
                    "name": "",
                    "description": "",
                    "rows": [
                        {
                            "columnGap": "0",
                            "columns": [
                                {
                                    "width": "nogrow",
                                    "offset": 0,
                                    "align": "auto",
                                    "questions": [
                                        {
                                            "key": "Contact Methods",
                                            "label": "",
                                            "labelPosition": "top",
                                            "labelWidth": "",
                                            "type": "question-array",
                                            "description": "",
                                            "required": false,
                                            "validators": null,
                                            "usePreviousValue": false,
                                            "addButtonText": "Add New Contact Method",
                                            "removable": true,
                                            "notes": [],
                                            "rows": [
                                                {
                                                    "columnGap": "0",
                                                    "columns": [
                                                        {
                                                            "width": "nogrow",
                                                            "offset": 0,
                                                            "align": "auto",
                                                            "questions": [
                                                                {
                                                                    "key": "Contact Method",
                                                                    "label": "Select Method",
                                                                    "labelPosition": "left",
                                                                    "labelWidth": "100px",
                                                                    "type": "dropdown",
                                                                    "description": "",
                                                                    "required": false,
                                                                    "validators": null,
                                                                    "usePreviousValue": false,
                                                                    "input": "",
                                                                    "placeholder": "Select",
                                                                    "hint": "",
                                                                    "default": "",
                                                                    "specifyPosition": "",
                                                                    "dropdownWidth": "200px",
                                                                    "notes": [],
                                                                    "options": [
                                                                        {
                                                                            "key": "Mailing Address",
                                                                            "value": "Mailing Address",
                                                                            "specify": true,
                                                                            "rows": [
                                                                                {
                                                                                    "columnGap": "0",
                                                                                    "columns": [
                                                                                        {
                                                                                            "width": "400px",
                                                                                            "offset": "-60px",
                                                                                            "align": "auto",
                                                                                            "questions": [
                                                                                                {
                                                                                                    "key": "Mailing Address",
                                                                                                    "label": "Mailing Address",
                                                                                                    "labelPosition": "left",
                                                                                                    "labelWidth": "100px",
                                                                                                    "type": "question-group",
                                                                                                    "description": "",
                                                                                                    "required": false,
                                                                                                    "validators": null,
                                                                                                    "usePreviousValue": false,
                                                                                                    "input": null,
                                                                                                    "notes": [],
                                                                                                    "rows": [
                                                                                                        {
                                                                                                            "columnGap": "0",
                                                                                                            "columns": [
                                                                                                                {
                                                                                                                    "width": "300px",
                                                                                                                    "offset": 0,
                                                                                                                    "align": "auto",
                                                                                                                    "questions": [
                                                                                                                        {
                                                                                                                            "key": "Address Line 1",
                                                                                                                            "label": "",
                                                                                                                            "labelPosition": "top",
                                                                                                                            "labelWidth": "",
                                                                                                                            "type": "textbox",
                                                                                                                            "description": "",
                                                                                                                            "required": false,
                                                                                                                            "validators": null,
                                                                                                                            "usePreviousValue": false,
                                                                                                                            "input": "",
                                                                                                                            "default": "",
                                                                                                                            "placeholder": "Street and Number, P.O. Box, c/o",
                                                                                                                            "hint": "",
                                                                                                                            "notes": []
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "key": "Address Line 2",
                                                                                                                            "label": "",
                                                                                                                            "labelPosition": "top",
                                                                                                                            "labelWidth": "",
                                                                                                                            "type": "textbox",
                                                                                                                            "description": "",
                                                                                                                            "required": false,
                                                                                                                            "validators": null,
                                                                                                                            "usePreviousValue": false,
                                                                                                                            "input": "",
                                                                                                                            "default": "",
                                                                                                                            "placeholder": "Apartment, suite, unit, building, floor, etc",
                                                                                                                            "hint": "",
                                                                                                                            "notes": []
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "key": "",
                                                                                                                            "label": "",
                                                                                                                            "labelPosition": "top",
                                                                                                                            "labelWidth": "",
                                                                                                                            "type": "question-group",
                                                                                                                            "description": "",
                                                                                                                            "required": false,
                                                                                                                            "validators": null,
                                                                                                                            "usePreviousValue": false,
                                                                                                                            "input": null,
                                                                                                                            "notes": [],
                                                                                                                            "rows": [
                                                                                                                                {
                                                                                                                                    "columnGap": "10px",
                                                                                                                                    "columns": [
                                                                                                                                        {
                                                                                                                                            "width": "90px",
                                                                                                                                            "offset": 0,
                                                                                                                                            "align": "auto",
                                                                                                                                            "questions": [
                                                                                                                                                {
                                                                                                                                                    "key": "City",
                                                                                                                                                    "label": "",
                                                                                                                                                    "labelPosition": "top",
                                                                                                                                                    "labelWidth": "",
                                                                                                                                                    "type": "textbox",
                                                                                                                                                    "description": "",
                                                                                                                                                    "required": false,
                                                                                                                                                    "validators": null,
                                                                                                                                                    "usePreviousValue": false,
                                                                                                                                                    "input": "",
                                                                                                                                                    "default": "",
                                                                                                                                                    "placeholder": "City",
                                                                                                                                                    "hint": "",
                                                                                                                                                    "notes": []
                                                                                                                                                }
                                                                                                                                            ]
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "width": "90px",
                                                                                                                                            "offset": 0,
                                                                                                                                            "align": "auto",
                                                                                                                                            "questions": [
                                                                                                                                                {
                                                                                                                                                    "key": "State",
                                                                                                                                                    "label": "",
                                                                                                                                                    "labelPosition": "top",
                                                                                                                                                    "labelWidth": "",
                                                                                                                                                    "type": "states",
                                                                                                                                                    "description": "",
                                                                                                                                                    "required": false,
                                                                                                                                                    "validators": null,
                                                                                                                                                    "usePreviousValue": false,
                                                                                                                                                    "input": "",
                                                                                                                                                    "default": "",
                                                                                                                                                    "placeholder": "State",
                                                                                                                                                    "hint": "",
                                                                                                                                                    "notes": []
                                                                                                                                                }
                                                                                                                                            ]
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            "width": "90px",
                                                                                                                                            "offset": 0,
                                                                                                                                            "align": "auto",
                                                                                                                                            "questions": [
                                                                                                                                                {
                                                                                                                                                    "key": "Zip Code",
                                                                                                                                                    "label": "",
                                                                                                                                                    "labelPosition": "top",
                                                                                                                                                    "labelWidth": "",
                                                                                                                                                    "type": "textbox",
                                                                                                                                                    "description": "",
                                                                                                                                                    "required": false,
                                                                                                                                                    "validators": null,
                                                                                                                                                    "usePreviousValue": false,
                                                                                                                                                    "input": "",
                                                                                                                                                    "default": "",
                                                                                                                                                    "placeholder": "Zip Code",
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
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "key": "Phone Number",
                                                                            "value": "Phone Number",
                                                                            "specify": true,
                                                                            "rows": [
                                                                                {
                                                                                    "columnGap": "0",
                                                                                    "columns": [
                                                                                        {
                                                                                            "width": "400px",
                                                                                            "offset": "-60px",
                                                                                            "align": "auto",
                                                                                            "questions": [
                                                                                                {
                                                                                                    "key": "Type",
                                                                                                    "label": "Type",
                                                                                                    "labelPosition": "left",
                                                                                                    "labelWidth": "100px",
                                                                                                    "type": "dropdown",
                                                                                                    "description": "",
                                                                                                    "required": false,
                                                                                                    "validators": null,
                                                                                                    "usePreviousValue": false,
                                                                                                    "input": "",
                                                                                                    "placeholder": "",
                                                                                                    "hint": "",
                                                                                                    "default": "",
                                                                                                    "specifyPosition": "",
                                                                                                    "dropdownWidth": "200px",
                                                                                                    "notes": [],
                                                                                                    "options": [
                                                                                                        {
                                                                                                            "key": "Cell Phone",
                                                                                                            "value": "Cell Phone",
                                                                                                            "specify": false,
                                                                                                            "rows": []
                                                                                                        },
                                                                                                        {
                                                                                                            "key": "Home Phone",
                                                                                                            "value": "Home Phone",
                                                                                                            "specify": false,
                                                                                                            "rows": []
                                                                                                        },
                                                                                                        {
                                                                                                            "key": "Work Phone",
                                                                                                            "value": "Work Phone",
                                                                                                            "specify": false,
                                                                                                            "rows": []
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    "key": "Phone Number",
                                                                                                    "label": "Phone Number",
                                                                                                    "labelPosition": "left",
                                                                                                    "labelWidth": "100px",
                                                                                                    "type": "tel",
                                                                                                    "description": "",
                                                                                                    "required": false,
                                                                                                    "validators": null,
                                                                                                    "usePreviousValue": false,
                                                                                                    "input": "",
                                                                                                    "placeholder": "",
                                                                                                    "hint": "",
                                                                                                    "notes": []
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "key": "Email",
                                                                            "value": "Email",
                                                                            "specify": true,
                                                                            "rows": [
                                                                                {
                                                                                    "columnGap": "0",
                                                                                    "columns": [
                                                                                        {
                                                                                            "width": "400px",
                                                                                            "offset": "-60px",
                                                                                            "align": "auto",
                                                                                            "questions": [
                                                                                                {
                                                                                                    "key": "Email Address",
                                                                                                    "label": "Email Address",
                                                                                                    "labelPosition": "left",
                                                                                                    "labelWidth": "100px",
                                                                                                    "type": "textbox",
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
                                                    ]
                                                }
                                            ],
                                            "input": [
                                                {
                                                    "rows": [
                                                        {
                                                            "columnGap": "0",
                                                            "columns": [
                                                                {
                                                                    "width": "nogrow",
                                                                    "offset": 0,
                                                                    "align": "auto",
                                                                    "questions": [
                                                                        {
                                                                            "key": "Contact Method",
                                                                            "label": "Select Method",
                                                                            "labelPosition": "left",
                                                                            "labelWidth": "100px",
                                                                            "type": "dropdown",
                                                                            "description": "",
                                                                            "required": false,
                                                                            "validators": null,
                                                                            "usePreviousValue": false,
                                                                            "input": "",
                                                                            "placeholder": "Select",
                                                                            "hint": "",
                                                                            "default": "",
                                                                            "specifyPosition": "",
                                                                            "dropdownWidth": "200px",
                                                                            "notes": [],
                                                                            "options": [
                                                                                {
                                                                                    "key": "Mailing Address",
                                                                                    "value": "Mailing Address",
                                                                                    "specify": true,
                                                                                    "rows": [
                                                                                        {
                                                                                            "columnGap": "0",
                                                                                            "columns": [
                                                                                                {
                                                                                                    "width": "400px",
                                                                                                    "offset": "-60px",
                                                                                                    "align": "auto",
                                                                                                    "questions": [
                                                                                                        {
                                                                                                            "key": "Mailing Address",
                                                                                                            "label": "Mailing Address",
                                                                                                            "labelPosition": "left",
                                                                                                            "labelWidth": "100px",
                                                                                                            "type": "question-group",
                                                                                                            "description": "",
                                                                                                            "required": false,
                                                                                                            "validators": null,
                                                                                                            "usePreviousValue": false,
                                                                                                            "input": null,
                                                                                                            "notes": [],
                                                                                                            "rows": [
                                                                                                                {
                                                                                                                    "columnGap": "0",
                                                                                                                    "columns": [
                                                                                                                        {
                                                                                                                            "width": "300px",
                                                                                                                            "offset": 0,
                                                                                                                            "align": "auto",
                                                                                                                            "questions": [
                                                                                                                                {
                                                                                                                                    "key": "Address Line 1",
                                                                                                                                    "label": "",
                                                                                                                                    "labelPosition": "top",
                                                                                                                                    "labelWidth": "",
                                                                                                                                    "type": "textbox",
                                                                                                                                    "description": "",
                                                                                                                                    "required": false,
                                                                                                                                    "validators": null,
                                                                                                                                    "usePreviousValue": false,
                                                                                                                                    "input": "",
                                                                                                                                    "default": "",
                                                                                                                                    "placeholder": "Street and Number, P.O. Box, c/o",
                                                                                                                                    "hint": "",
                                                                                                                                    "notes": []
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "key": "Address Line 2",
                                                                                                                                    "label": "",
                                                                                                                                    "labelPosition": "top",
                                                                                                                                    "labelWidth": "",
                                                                                                                                    "type": "textbox",
                                                                                                                                    "description": "",
                                                                                                                                    "required": false,
                                                                                                                                    "validators": null,
                                                                                                                                    "usePreviousValue": false,
                                                                                                                                    "input": "",
                                                                                                                                    "default": "",
                                                                                                                                    "placeholder": "Apartment, suite, unit, building, floor, etc",
                                                                                                                                    "hint": "",
                                                                                                                                    "notes": []
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "key": "",
                                                                                                                                    "label": "",
                                                                                                                                    "labelPosition": "top",
                                                                                                                                    "labelWidth": "",
                                                                                                                                    "type": "question-group",
                                                                                                                                    "description": "",
                                                                                                                                    "required": false,
                                                                                                                                    "validators": null,
                                                                                                                                    "usePreviousValue": false,
                                                                                                                                    "input": null,
                                                                                                                                    "notes": [],
                                                                                                                                    "rows": [
                                                                                                                                        {
                                                                                                                                            "columnGap": "10px",
                                                                                                                                            "columns": [
                                                                                                                                                {
                                                                                                                                                    "width": "90px",
                                                                                                                                                    "offset": 0,
                                                                                                                                                    "align": "auto",
                                                                                                                                                    "questions": [
                                                                                                                                                        {
                                                                                                                                                            "key": "City",
                                                                                                                                                            "label": "",
                                                                                                                                                            "labelPosition": "top",
                                                                                                                                                            "labelWidth": "",
                                                                                                                                                            "type": "textbox",
                                                                                                                                                            "description": "",
                                                                                                                                                            "required": false,
                                                                                                                                                            "validators": null,
                                                                                                                                                            "usePreviousValue": false,
                                                                                                                                                            "input": "",
                                                                                                                                                            "default": "",
                                                                                                                                                            "placeholder": "City",
                                                                                                                                                            "hint": "",
                                                                                                                                                            "notes": []
                                                                                                                                                        }
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    "width": "90px",
                                                                                                                                                    "offset": 0,
                                                                                                                                                    "align": "auto",
                                                                                                                                                    "questions": [
                                                                                                                                                        {
                                                                                                                                                            "key": "State",
                                                                                                                                                            "label": "",
                                                                                                                                                            "labelPosition": "top",
                                                                                                                                                            "labelWidth": "",
                                                                                                                                                            "type": "states",
                                                                                                                                                            "description": "",
                                                                                                                                                            "required": false,
                                                                                                                                                            "validators": null,
                                                                                                                                                            "usePreviousValue": false,
                                                                                                                                                            "input": "",
                                                                                                                                                            "default": "",
                                                                                                                                                            "placeholder": "State",
                                                                                                                                                            "hint": "",
                                                                                                                                                            "notes": []
                                                                                                                                                        }
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    "width": "90px",
                                                                                                                                                    "offset": 0,
                                                                                                                                                    "align": "auto",
                                                                                                                                                    "questions": [
                                                                                                                                                        {
                                                                                                                                                            "key": "Zip Code",
                                                                                                                                                            "label": "",
                                                                                                                                                            "labelPosition": "top",
                                                                                                                                                            "labelWidth": "",
                                                                                                                                                            "type": "textbox",
                                                                                                                                                            "description": "",
                                                                                                                                                            "required": false,
                                                                                                                                                            "validators": null,
                                                                                                                                                            "usePreviousValue": false,
                                                                                                                                                            "input": "",
                                                                                                                                                            "default": "",
                                                                                                                                                            "placeholder": "Zip Code",
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
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "key": "Phone Number",
                                                                                    "value": "Phone Number",
                                                                                    "specify": true,
                                                                                    "rows": [
                                                                                        {
                                                                                            "columnGap": "0",
                                                                                            "columns": [
                                                                                                {
                                                                                                    "width": "400px",
                                                                                                    "offset": "-60px",
                                                                                                    "align": "auto",
                                                                                                    "questions": [
                                                                                                        {
                                                                                                            "key": "Type",
                                                                                                            "label": "Type",
                                                                                                            "labelPosition": "left",
                                                                                                            "labelWidth": "100px",
                                                                                                            "type": "dropdown",
                                                                                                            "description": "",
                                                                                                            "required": false,
                                                                                                            "validators": null,
                                                                                                            "usePreviousValue": false,
                                                                                                            "input": "",
                                                                                                            "placeholder": "",
                                                                                                            "hint": "",
                                                                                                            "default": "",
                                                                                                            "specifyPosition": "",
                                                                                                            "dropdownWidth": "200px",
                                                                                                            "notes": [],
                                                                                                            "options": [
                                                                                                                {
                                                                                                                    "key": "Cell Phone",
                                                                                                                    "value": "Cell Phone",
                                                                                                                    "specify": false,
                                                                                                                    "rows": []
                                                                                                                },
                                                                                                                {
                                                                                                                    "key": "Home Phone",
                                                                                                                    "value": "Home Phone",
                                                                                                                    "specify": false,
                                                                                                                    "rows": []
                                                                                                                },
                                                                                                                {
                                                                                                                    "key": "Work Phone",
                                                                                                                    "value": "Work Phone",
                                                                                                                    "specify": false,
                                                                                                                    "rows": []
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        {
                                                                                                            "key": "Phone Number",
                                                                                                            "label": "Phone Number",
                                                                                                            "labelPosition": "left",
                                                                                                            "labelWidth": "100px",
                                                                                                            "type": "tel",
                                                                                                            "description": "",
                                                                                                            "required": false,
                                                                                                            "validators": null,
                                                                                                            "usePreviousValue": false,
                                                                                                            "input": "",
                                                                                                            "placeholder": "",
                                                                                                            "hint": "",
                                                                                                            "notes": []
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "key": "Email",
                                                                                    "value": "Email",
                                                                                    "specify": true,
                                                                                    "rows": [
                                                                                        {
                                                                                            "columnGap": "0",
                                                                                            "columns": [
                                                                                                {
                                                                                                    "width": "400px",
                                                                                                    "offset": "-60px",
                                                                                                    "align": "auto",
                                                                                                    "questions": [
                                                                                                        {
                                                                                                            "key": "Email Address",
                                                                                                            "label": "Email Address",
                                                                                                            "labelPosition": "left",
                                                                                                            "labelWidth": "100px",
                                                                                                            "type": "textbox",
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
                    ]
                }
            ]
        }
    ],
    "status": [],
    "allowedClientTypes": ["family"]
}
`);