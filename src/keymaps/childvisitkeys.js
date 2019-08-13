exports.childVisitKeys = JSON.parse(`{
    "Previous Visit Date": {
        "type":"direct",
        "field":"LastVisitDate"
    },
    "Initial Visit Date": {
        "type":"direct",
        "field":"InitialVisitDate"
    },
    "Correct": {
        "type":"direct",
        "value":"Yes"
    },
    "Visit Date": {
        "type":"direct",
        "field":"VisitDate"
    },
    "Visit Time": "----",
    "Visit Time Start": {
        "type":"direct",
        "field":"StartTime"
    },
    "Visit Time End": {
        "type":"direct",
        "field":"EndTime"
    },
    "Visit Duration": {
        "type":"input-map",
        "function":"timeDuration",
        "args": [{"field":"StartTime"},{"field":"EndTime"}]
    },
    "Previous Client": {
        "type":"conditional",
        "if": {"field":"PreviousClient"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Client Type": {
        "type":"direct",
        "field":"ClientType"
    },
    "Funding Level": "????",
    "Other Funding Level": "????",
    "DOB": {
        "type":"direct",
        "field":"DateOfBirth"
    },
    "Age": {
        "type":"direct",
        "field":"ageyears"
    },
    "Gender Identity": {
        "type":"direct",
        "field":"Gender"
    },
    "Other ": "????",
    "Lives With": {
        "type":"special-case",
        "case": "Lives With",
        "field": "ChildLivesWithName"
    },
    "Lives With Else - 6": {
        "type":"special-case",
        "case": "Lives With Else",
        "field": "ChildLivesWithName"
    },
    "Relationship - 6": "????",
    "Birth Weight": "----",
    "Birth Weight Lb": {
        "type":"direct",
        "field":"InfantWeightLbs"
    },
    "BirthWeightOz": {
        "type":"direct",
        "field":"InfantWeightOz"
    },
    "Current Height": "----",
    "Cur Height (ft)": {
        "type":"direct",
        "field":"HeightFeet"
    },
    "Cur Height (in)": {
        "type":"direct",
        "field":"HeightInches"
    },
    "Previous Height": "????",
    "Prev Height (ft)": "????",
    "Prev Height (in)": "????",
    "Height Change": {
        "type":"direct",
        "field":"HeightChange"
    },
    "Current Weight": "----",
    "Cur Weight (lb)": {
        "type":"direct",
        "field":"CurrentWeightIbs"
    },
    "Cur Weight (oz)": {
        "type":"direct",
        "field":"CurrentWeightOz"
    },
    "Previous Weight": "????",
    "Prev Weight (lb)": "????",
    "Prev Weight (oz)": "????",
    "Weight Change": {
        "type":"direct",
        "field":"WeightChangeLbs"
    },
    "BMI": "----",
    "Cur BMI": {
        "type":"direct",
        "field":"BMI"
    },
    "Prev BMI": "????",
    "Change BMI": {
        "type":"direct",
        "field":"BMIChange"
    },
    "County": {
        "type":"radio",
        "field": "County"
    },
    "Other Specify": "????",
    "Race": {
        "type":"radio",
        "field": "Race"
    },
    "MultipleRaces": "????",
    "Other Race (Multi)": "????",
    "Other Race (Single)": "????",
    "Insurance": "----",
    "Medicaid Number": {
        "type":"direct",
        "field": "MedicaidNumber"
    },
    "Status": {
        "type":"radio",
        "field":"MedicaidPending",
    },
    "Other Insurance": {
        "type":"direct",
        "field": "Insurance"
    },
    "Other Insurance Status": "????",
    "Medical Provider Name": "----",
    "Medical Provider First Name": {
        "type":"direct",
        "field": "DoctorsFirstName"
    },
    "Medical Provider Last Name": {
        "type":"direct",
        "field": "DoctorsLastName"
    },
    "Type of Provider": {
        "type":"direct",
        "field": "HealthCareProviderType"
    },
    "Other Medical Provider": "????",
    "Medical Conditions": {
        "type":"conditional",
        "if": {"field":"HasCondition"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Condition Info": {
        "type":"question-array",
        "inputs": [
            {
                "Condition": {
                    "type":"direct",
                    "field": "MedicalDevelopmentalBehavioralCondition"
                },
                "Diagnosed": {
                    "type":"conditional",
                    "if":"{"field":"Diagnosed"}",
                    "then":"{"value":"Yes"}",
                    "else":"{"value":"No"}"
                }
            }
        ]
    },
    "Medical Visits Primary": {
        "type":"question-array",
        "inputs": [
            {
                "PMP Appointment Date": {
                    "type":"direct",
                    "field": "MedicalDevelopmentalBehavioralCondition"
                },
                "Kept PMP Visit": {
                    "type":"conditional",
                    "if": {"field":"keptlastappointment"},
                    "then": {"value":"Yes"},
                    "else": {"value":"No"}
                }
            }
        ]
    },
    "Specify Why Missed": {
        "type":"direct",
        "field":"keptlastappointmentspecify"
    },
    "Other healthcare provider": "????",
    "Other MP": "????",
    "Appointment Other MP": "????",
    "Specify Other Visit": "????",
    "Emergency Room": "????",
    "Date of ER Visit": {
        "type":"direct",
        "field":"ChildTreatedEmergencyRoomDate"
    },
    "Reason For ER": {
        "type":"checkboxes",
        "field": "ERReason"
    },
    "Safety Problem": {
        "type":"direct",
        "field":"ERReasonOtherSafety"
    },
    "Injury": {
        "type":"direct",
        "field":"ERReasonOtherInjury"
    },
    "Specify ER Reason": "????",
    "ER Cause Prevent.": {
        "type":"conditional",
        "if": {"field":"ERVisitPreventable"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Specify Preventable Reason": "????",
    "Specialists": {
        "type":"question-array",
        "inputs": [
            {
                "Specialist FName": {
                    "field":"SpecialistFirstName",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName"
                },
                "Specialty": {
                    "type":"direct",
                    "field":"SpecialistField"
                },
                "Specialist Appointments": {
                    "type":"question-array",
                    "inputs": [
                        {
                            "Specialist App. Date": {
                                "type":"direct",
                                "field":"SpecialistNextVisit"
                            },
                            "Kept Specialist Appointment": {
                                "type":"conditional",
                                "if":{"field":"KeptLastSpecialistAppointment1"},
                                "then" : {"value":"Yes"},
                                "else":{"value":"No"}
                            }
                        }
                    ]
                }
            },
            {
                "Specialist FName": {
                    "value":"",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName2"
                },
                "Specialty": {
                    "type":"direct",
                    "field":"SpecialistField2"
                },
                "Specialist Appointments": {
                    "type":"question-array",
                    "inputs": [
                        {
                            "Specialist App. Date": {
                                "type":"direct",
                                "field":"Specialist2NextVisit"
                            },
                            "Kept Specialist Appointment": {
                                "type":"radio",
                                "value":""
                            }
                        }
                    ]
                }
            },
            {
                "Specialist FName": {
                    "value":"",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName3"
                },
                "Specialty": {
                    "type":"direct",
                    "field":"SpecialistField3"
                },
                "Specialist Appointments": {
                    "type":"question-array",
                    "inputs": [
                        {
                            "Specialist App. Date": {
                                "type":"direct",
                                "field":"Specialist3NextVisit"
                            },
                            "Kept Specialist Appointment": {
                                "type":"radio",
                                "value":""
                            }
                        }
                    ]
                }
            },
            {
                "Specialist FName": {
                    "value":"",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName4"
                },
                "Specialty": {
                    "type":"direct",
                    "field":"SpecialistField4"
                },
                "Specialist Appointments": {
                    "type":"question-array",
                    "inputs": [
                        {
                            "Specialist App. Date": {
                                "type":"direct",
                                "field":"Specialist4NextVisit"
                            },
                            "Kept Specialist Appointment": {
                                "type":"radio",
                                "value":""
                            }
                        }
                    ]
                }
            },
            {
                "Specialist FName": {
                    "value":"",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName5"
                },
                "Specialty": {
                    "type":"direct",
                    "field":"SpecialistField5"
                },
                "Specialist Appointments": {
                    "type":"question-array",
                    "inputs": [
                        {
                            "Specialist App. Date": {
                                "type":"direct",
                                "field":"Specialist5NextVisit"
                            },
                            "Kept Specialist Appointment": {
                                "type":"radio",
                                "value":""
                            }
                        }
                    ]
                }
            }
        ]
    },
    "Specialty": "Specialty",
    "Specialist Appointments": "",
    "Specialist App. Date": "SpecialistNextVisit,Specialist2NextVisit,Specialist3NextVisit,Specialist4NextVisit,Specialist5NextVisit",
    "Kept Specialist Appointment": "",
    "Specify Missed Spec. Appt.": "",
    "Breastfeeding": "Breastfeeding",
    "Weeks Breast Feeding": "NumberOfWeeksBreastfeeding",
    "Low Birth Weight": "LowBirthWeight",
    "Pre-term Delivery": "PretermDelivery",
    "Problems at Delivery": "ProblemAtDelivery",
    "Specify Deliv. Problems": "ProblemAtDeliverySpecify",
    "History of Abuse": "HistoryOfAbuse",
    "Specify Abuse": "SpecifyHistoryOfAbuse",
    "Immunizations Current": "ImmunizationsCurrent",
    "Verified Immun. Record": "VerifiedImmunizationRecord",
    "UTD Per Parent Report": "UTDPPR",
    "Specify": "UTDPPRComment",
    "Appropriate MP": "UsedAppropriateMDforChildsNeeds",
    "Same Medical Group": "UsedSameMDforAllHealthIssues",
    "Comfortable Exchanging Health Info": "FeelsComfortableExchangingHealthInfoWithMD",
    "Can Access MP": "CanAccessMDandServicesWhenNeeded",
    "Notifies MP": "NotifiesPrimaryMDofAnyOtherHealthServicesChildIsReceiving",
    "Medical Home": "MedicalHome",
    "Attends School": "",
    "School Name": "School",
    "School Type": "",
    "Name Other School Type": "",
    "Days in School": "",
    "Identified Behavioral Concerns": "IdentifiedLearningBehavioralConcernsAtSchool",
    "Specify Behavioral Concerns": "IdentifiedLearningBehavioralConcernsAtSchoolSpecify",
    "Current Age - ASQ": "asqage",
    "ASQ Questionnaire": "",
    "ASQ Questionnaire Type": "",
    "ASQ Questionnaire Date": "",
    "ASQ Communication": "",
    "Score (Communication)": "",
    "N/E (Communication)": "",
    "ASQ Gross Motor": "",
    "Score (Gross Motor)": "",
    "N/E (Gross Motor)": "",
    "ASQ Fine Motor": "",
    "Score (Fine Motor)": "",
    "N/E (Fine Motor)": "",
    "ASQ Problem Solving": "",
    "Score (Problem Solving)": "",
    "N/E (Problem Solving)": "",
    "ASQ Personal Social": "",
    "Score (Personal Social)": "",
    "N/E (Personal Social)": "",
    "Current Age - ASQ-SE": "",
    "ASQ-SE Questionnaire": "",
    "ASQ-SE Questionnaire Type": "",
    "ASQ-SE Score": "",
    "ASQ-SE Date": "",
    "Visit Summary": "visitsummary",
    "Reviewed W/ Client": "visitsummaryreviewed"
}`);
