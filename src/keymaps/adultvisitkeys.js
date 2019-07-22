exports.adultVisitKeys = JSON.parse(`{
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
        "value": true
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
    "Client Level": {
        "type":"direct",
        "field":"ClientLevel"
    },
    "ClientPoints - CO": "----",
    "ClientPoints - TR": "----",
    "Client Score": {
        "type":"direct",
        "field":"ClientScore"
    },
    "Client Type": {
        "type":"direct",
        "field":"ClientType"
    },
    "Funding Level": "",
    "Sub Funding Level - Other": "****",
    "Client Referral Source": {
        "type":"direct",
        "field":"ReferredBy"
    },
    "Previous Client": {
        "type":"conditional",
        "if": {"field":"PreviousClient"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Children's Division": "",
    "DOB": {
        "type":"direct",
        "field":"DateOfBirth"
    },
    "Age": {
        "type":"direct",
        "field":"AgeYears"
    },
    "Marital Status": {
        "type":"radio",
        "field":"MaritalStatus"
    },
    "Street Address": "----",
    "Address Line 1": {
        "type":"direct",
        "field":"Address"
    },
    "Address Line 2": "???",
    "Address Line 3": "----",
    "City": {
        "type":"direct",
        "field":"City"
    },
    "State": {
        "type":"direct",
        "field":"State"
    },
    "Zip Code": {
        "type":"direct",
        "field":"Zip"
    },
    "Phone Numbers": {
        "type":"question-array",
        "inputs": [
            {
                "Phone Number Type": {"value":"Home"},
                "Phone Number": {"field":"HomePhone"}
            }, 
            {
                "Phone Number Type": {"value":"Work"},
                "Phone Number": {"field":"WorkPhone"}
            }, 
            {
                "Phone Number Type": {"value":"Other"},
                "Phone Number": {"field":"OtherPhone"}
            }
        ]
    },
    "County": {
        "type":"radio",
        "field": "County"
    },
    "Other Specify": "???",
    "Lives Alone": "",
    "Who Else": "",
    "Who Else Input - Other": "",
    "Gender Identity": "Gender",
    "Other ": "",
    "Preferred Pronoun": "",
    "Primary Language": "",
    "Speaks/Writes English (Spanish)": "",
    "Specify Primary Lang.": "",
    "Speaks/Writes English (Other)": "",
    "BMI - QG": "----",
    "Height": "----",
    "Height (ft)": {
        "type":"direct",
        "field":"PregnantHeightFeet"
    }, 
    "Height (In)": {
        "type":"direct",
        "field":"PregnantHeightIn"
    },
    "Weight": "???",
    "Current Weight": {
        "type": "direct",
        "field": "CurrentWeight"
    },
    "Previous Weight": "???",
    "Weight Change": {
        "type":"direct",
        "field":"WeightChange"
    },
    "No Weight Given": "???",
    "New BMI - QG": "???",
    "New BMI": {
        "type":"direct",
        "field":"BMI"
    },
    "Race": {
        "type":"radio",
        "field": "Race"
    },
    "MultipleRaces": "???",
    "Other Race (Multi)": "???",
    "Other Race (Single)": "???",
    "Employment Status": "EmploymentStatus",
    "Retired": "",
    "Disabled": "",
    "FT Stay-At-Home Parent": "",
    "Relationship to Child": {
        "type":"radio",
        "field":"RelationshipToChild"
    },
    "Specify Relationship": "???",
    "Income": {
        "type":"input-map",
        "function":"income",
        "args": [{"field":"FamilyYearlyIncome"},{"field":"FamilyYearlyIncome"},{"field":"FamilyYearlyIncome"}]
    },
    "Previous Income": "???",
    "Household Members": {
        "type":"direct",
        "field":"HouseMembers"
    },
    "Type of Aid": {
        "type":"checkboxes",
        "field":"TypeOfAide"
    },
    "Type of Aid - Specify": "???",
    "Emergency Contact Name": "----",
    "EC First Name": "EmergencyContactName",
    "EC Last Name": "",
    "EC Relationship": "EmergencyContactRelationship",
    "EC Phone Numbers": {
        "type":"question-array",
        "inputs": [
            {
                "EC Phone Number Type": {"value":"Home"},
                "EC Phone Number": {"field":"EmergencyContactHomePhone"}
            }, 
            {
                "EC Phone Number Type": {"value":"Work"},
                "EC Phone Number": {"field":"EmergencyContactWorkPhone"}
            }, 
            {
                "EC Phone Number Type": {"value":"Other"},
                "EC Phone Number": {"field":"EmergencyContactOtherPhone"}
            }
        ]
    },
    "Parenting Partner": {
        "type":"conditional",
        "if": {"field":"ParentingPartnerName"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Parenting Partner Name": "----",
    "PP First Name": "ParentingPartnerName",
    "PP Last Name": "???",
    "PP Relationship": "ParentingPartnerRelationship",
    "PP Employment Status": "???",
    "PP Retired": "???",
    "PP Disabled": "???",
    "PP Schooling Status": "???",
    "PP Current Schooling Level": "???",
    "PP Specify Other Schooling": "???",
    "PP FT Stay-At-Home Parent": "???",
    "Insurance": "Insurance",
    "Medicaid Number": "MedicaidNumber",
    "Status": {
        "type":"conditional",
        "if": {"field":"MedicaidPending"},
        "then": {"value":"Pending"},
        "else":""
    },
    "Other Insurance": "???",
    "Other Insurance Status": "???",
    "Medical Provider Name": "----",
    "Medical Provider First Name": "DoctorsFirstName",
    "Medical Provider Last Name": "DoctorsLastName",
    "Medical Visits Primary": "???",
    "PMP Appointment Date": "???",
    "Appointment Scheduled": "???",
    "Primary Appointment Kept": {
        "type":"conditional",
        "if": {"field":"KeptLastAppointment"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Reason Primary Appt Unmet": {
        "type":"direct",
        "field":"KeptLastAppointmentSpecify"
    },
    "Reason unscheduled": "",
    "Other healthcare provider": "",
    "Other MP": "",
    "Date Other MP": "",
    "Reason other MP": "",
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
                    "field":"SpecialistFirstName",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName"
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
                    "field":"SpecialistFirstName",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName"
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
                    "field":"SpecialistFirstName",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName"
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
                    "field":"SpecialistFirstName",
                    "type":"direct"
                },
                "Specialist LName": {
                    "type":"direct",
                    "field":"SpecialistLastName"
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
    "Specify Missed Spec. Appt.": "",
    "Therapist": {
        "type":"conditional",
        "if": {"field":"Therapy"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Therapist's Name": "----",
    "Therapist First Name": {
        "type":"direct",
        "field": "FirstNameOfTherapist"
    },
    "Therapist Last Name": {
        "type":"direct",
        "field": "LastNameOfTherapist"
    },
    "Current Medical Conditions": {
        "type":"conditional",
        "if": {"field":"SpecifyCurrentMedicalConditions"},
        "then": {"field":"Yes"},
        "else": {"field":"No"}
    },
    "Specify Medical Conditions": {
        "type":"direct",
        "field":"SpecifyCurrentMedicalConditions"
    },
    "Therapist Appointments": {
        "type":"question-array",
        "inputs": [
            {
                "Therapy Appointment Date": {
                    "type":"direct",
                    "field":"DateOfTherapy"
                },
                "Kept Therapy Appointment": {
                    "type":"conditional",
                    "if": {"field":"KeptLastTherapyAppointment"},
                    "then": {"value":"Yes"},
                    "else": {"value":"No"}
                }
            }
        ]
    },
    "Allergies": {
        "type":"conditional",
        "if": {"field":"Allergies"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Diabetes": {
        "type":"conditional",
        "if": {"field":"Diabetes"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Smoker (present)-Client": {
        "type":"conditional",
        "if": {"field":"SmokerClient"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Smoker (present)-Household Members, Friends, etc.": {
        "type":"conditional",
        "if": {"field":"SmokerHousehold"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Heart disease": {
        "type":"conditional",
        "if": {"field":"HeartDisease"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "HIV Positive": {
        "if":"HIVpositive",
        "then":"Yes",
        "else":"No"
    },
    "Hypertension": {
        "type":"conditional",
        "if": {"field":"Hypertension"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Kidney disease": {
        "type":"conditional",
        "if": {"field":"KidneyDisease"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Psychiatric history": {
        "type":"conditional",
        "if": {"field":"PsychiatricHistory"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Seizure disorder": {
        "type":"conditional",
        "if": {"field":"SeizureDisorder"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Cervical problems": {
        "type":"conditional",
        "if": {"field":"CervicalProblems"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "STD's": {
        "type":"conditional",
        "if": {"field":"STDs"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Medical History - Other": {
        "type":"conditional",
        "if": {"field":"OtherHistory"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Specify Other Medical History": {
        "type": "direct",
        "field": "OtherHistorySpecify"
    },
    "History of Abuse": {
        "type":"conditional",
        "if": {"field":"HistoryOfAbuse"},
        "then": {"value":"Yes"},
        "else": {"value":"No"}
    },
    "Specify Abuse": {
        "type":"direct",
        "field":"SpecifyHistoryOfAbuse"
    },
    "Depression Assessment": {
        "type":"question-array",
        "inputs": [
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore1Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore1"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore2Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore2"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore3Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore3"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore4Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore4"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore5Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore5"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore6Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore6"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore7Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore7"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore8Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore8"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore9Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore9"
                }
            },
            {
                "Date of Depression Assessment": {
                    "type":"direct",
                    "field":"DepressionScore10Date"
                },
                "Depression Assessment Score": {
                    "type":"direct",
                    "field":"DepressionScore10"
                }
            }
        ]
    },
    "Score too high": "???",
    "Depression Score Alert": "???",
    "Reason": "???",
    "Currently Pregnant": {
        "type":"conditional",
        "if": {"field":"PregnancySectionDoesNotApplytoFamily"},
        "then": {"value":"No"},
        "else": {"value":"Yes"}
    },
    "Due Date": {
        "type":"direct",
        "field":"PregnancyDueDate"
    },
    "Subsequent Pregnancy": {
        "type":"checkboxes",
        "field":"SubsequentProgramPregnancy"
    },
    "Gestational Age": {
        "type":"direct",
        "field":"GestionalAgeWeeks"
    },
    "Trimester": {
        "type":"direct",
        "field":"PregnancyTrimester"
    },
    "Receiving Prenatal Care": {
        "type":"conditional",
        "if":{"field":"ReceivingPrenatalCare"},
        "then":{"value":"Yes"},
        "else":{"value":"No"}
    },
    "Gest. Week Prenatal Care Began": {
        "type":"direct",
        "field":"GestationalWeekPrenatalCareBegan"
    },
    "Previous Prenatal Care Visits": "",
    "Number Prenatal Care Visits": {
        "type":"direct",
        "field": "NumberOfPrenatalCareVisits"
    },
    "Adequate Prenatal Care": "----",
    "Satisfied With Prenatal Care": {
        "type":"conditional",
        "if":{"field":"PrenatalCareSatasfaction"},
        "then":{"value":"Yes"},
        "else":{"value":"No"}
    },
    "Not Satisfied with Prenatal Care Reason": "",
    "Pregnancy Wanted": "PregnancyWanted",
    "Previous Pregnancies": "",
    "Number of Pregnancies": "NumberOfPregnancies",
    "Number of Live Births": "NumberOfLiveBirths",
    "Number of Living Children": "NumberOfLivingChildren",
    "Last Delivery Date": "DateOfLastDelivery",
    "Had Previous Pregnancy Complications": "PreviousPregnancyComplications",
    "Induced Miscarriages": {
        "type":"direct",
        "field":"NumberOfInducedPregnancies"
    },
    "Spontaneous Miscarriages": "NumberOfSpontaneousMiscarriages",
    "Fetal Deaths": "NumberOfFetalDeaths",
    "Neonatal Deaths": "NumberOfNeonatalDeaths",
    "Pre-term labors": "NumberOfIncididentsOfPretermLabor",
    "Pre-term Deliveries": "NumberOfPretermDeliveries",
    "Low Birth Weight Babies": "NumberOfLowBirthRateBabies",
    "Multi Gestations": "NumberOfMultiGestations",
    "C-sections": "NumberOfCsections",
    "Labor/Delivery Complications": {
        "type":"direct",
        "field": "LaborComplications"
    },
    "Health or Medical Concerns - Pregnancy": "PregnancyConcerns",
    "Concern Resolved": "",
    "Avg Weight Change - Previous Pregnancy": "",
    "Weight Change - Pregnancy (lbs)": "WeightGainedDuringPregnancy",
    "Reason for Weight Change": "",
    "Reason Explanation": "",
    "Participates in the Community": "ParticipationInCommunity",
    "Participates in the Community - Where": "ParticipationInCommunityWhere",
    "Community Club Detail": "",
    "Church Group Detail": "",
    "Volunteer Detail": "",
    "Volunteer Hours": "VolunteerHoursSinceLast",
    "Previous Total Hours": "TotalVolunteerHours - VolunteerHoursSinceLast",
    "New Total Hours": "TotalVolunteerHours",
    "Employment Skills - Attitude": "EmploymentSkills1",
    "1. Attitude - Q1": "employment_skills_1_1",
    "Prev - 1. Attitude - Q1": "",
    "1. Attitude - Q2": "employment_skills_1_2",
    "Prev - 1. Attitude - Q2": "",
    "1. Attitude - Q3": "employment_skills_1_3",
    "Prev - 1. Attitude - Q3": "",
    "1. Attitude - Q4": "employment_skills_1_4",
    "Prev - 1. Attitude - Q4": "",
    "1. Attitude - Q5": "employment_skills_1_5",
    "Prev - 1. Attitude - Q5": "",
    "1. Attitude - Total": "employment_skills_1_total",
    "Prev - 1. Attitude - Total": "",
    "Employment Skills - Responsibility": "EmploymentSkills2",
    "2. Responsibility - Q1": "employment_skills_2_1",
    "Prev - 2. Responsibility - Q1": "",
    "2. Responsibility - Q2": "employment_skills_2_2",
    "Prev - 2. Responsibility - Q2": "",
    "2. Responsibility - Q3": "employment_skills_2_3",
    "Prev - 2. Responsibility - Q3": "",
    "2. Responsibility - Q4": "employment_skills_2_4",
    "Prev - 2. Responsibility - Q4": "",
    "2. Responsibility - Q5": "employment_skills_2_5",
    "Prev - 2. Responsibility - Q5": "",
    "2. Responsibility - Total": "employment_skills_2_total",
    "Prev - 2. Responsibility - Total": "",
    "Employment Skills - Communication": "EmploymentSkills3",
    "3. Communication - Q1": "employment_skills_3_1",
    "Prev - 3. Communication - Q1": "",
    "3. Communication - Q2": "employment_skills_3_2",
    "Prev - 3. Communication - Q2": "",
    "3. Communication - Q3": "employment_skills_3_3",
    "Prev - 3. Communication - Q3": "",
    "3. Communication - Q4": "employment_skills_3_4",
    "Prev - 3. Communication - Q4": "",
    "3. Communication - Q5": "employment_skills_3_5",
    "Prev - 3. Communication - Q5": "",
    "3. Communication - Total": "employment_skills_3_total",
    "Prev - 3. Communication - Total": "",
    "Employment Skills - Problem Solving Skills": "EmploymentSkills4",
    "4. Problem Solving Skills - Q1": "employment_skills_4_1",
    "Prev - 4. Problem Solving Skills - Q1": "",
    "4. Problem Solving Skills - Q2": "employment_skills_4_2",
    "Prev - 4. Problem Solving Skills - Q2": "",
    "4. Problem Solving Skills - Q3": "employment_skills_4_3",
    "Prev - 4. Problem Solving Skills - Q3": "",
    "4. Problem Solving Skills - Q4": "employment_skills_4_4",
    "Prev - 4. Problem Solving Skills - Q4": "",
    "4. Problem Solving Skills - Q5": "employment_skills_4_5",
    "Prev - 4. Problem Solving Skills - Q5": "",
    "4. Problem Solving Skills - Total": "employment_skills_4_total",
    "Prev - 4. Problem Solving Skills - Total": "",
    "Employment Skills - Workplace Preperation Skills": "EmploymentSkills5",
    "5. Workplace Preparation Skills - Q1": "employment_skills_5_1",
    "Prev - 5. Workplace Preparation Skills - Q1": "",
    "5. Workplace Preparation Skills - Q2": "employment_skills_5_2",
    "Prev - 5. Workplace Preparation Skills - Q2": "",
    "5. Workplace Preparation Skills - Q3": "employment_skills_5_3",
    "Prev - 5. Workplace Preparation Skills - Q3": "",
    "5. Workplace Preparation Skills - Q4": "employment_skills_5_4",
    "Prev - 5. Workplace Preparation Skills - Q4": "",
    "5. Workplace Preparation Skills - Q5": "employment_skills_5_5",
    "Prev - 5. Workplace Preparation Skills - Q5": "",
    "5. Workplace Preparation Skills - Total": "employment_skills_5_total",
    "Prev - 5. Workplace Preparation Skills - Total": "",
    "Employment Skills Total": "employment_skills_total_total",
    "Prev - Employment Skills Total": "",
    "Schooling Status": "",
    "Current Schooling Level": "SchoolGrade",
    "Specify Other Schooling": "",
    "Education History": "",
    "Education Type": "",
    "Pre High School Completion Grade": "",
    "Where - High School": "HighSchoolName",
    "High School Diploma": "HighSchoolDiploma",
    "Date of Diploma": "DiplomaDateRecieved",
    "Currently Enrolled": "",
    "Highest Grade ": "",
    "Attending GED Classes": "AttendingGEDClasses",
    "GED Classes Start": "GEDClassesDateStarted",
    "GED Classes Complete": "GEDDateCompleted",
    "College Completed": "",
    "Vocational School Name": "VocationalSchoolName",
    "Vocational School City": "VocationalSchoolCity",
    "Vocational School State": "VocationalSchoolState",
    "Field of Study": "VocationalFieldOfStudy",
    "Completed": "",
    "Date of Completion": "VocationalCompletionDate",
    "Expected Completion Date": "ExpectedDateOfVocationalCompletion",
    "Specify Cert/Liscense": "OtherCertsLicenses,OtherLicensesHeld",
    "Referral": "",
    "Date of Referral": "",
    "Referral Category": "",
    "Other Reason": "",
    "Referred To": "",
    "Utilized?": "ClientReferralUtilization",
    "Circle of Support": "",
    "Initial Default People of Support - Name": "",
    "Initial Default People of Support - Relationship": "",
    "Family Goal Plan": "FamilyGoalPlan",
    "Issue - Family Goal Plan": "",
    "Strengths to build on": "",
    "Issue Resolved": "",
    "Date Resolved": "",
    "Mini Goals": "",
    "Mini Goal Date": "",
    "Mini Goal": "",
    "Means to complete": "",
    "Date to Complete": "",
    "Date Completed": "",
    "Outcome/Comments": "",
    "spacer": "",
    "spacer2": "",
    "Child Development Info": "",
    "CD Information Subject/Topic": "",
    "CD Information Source": "",
    "Module": "",
    "Improved Knowledge": "",
    "Improved CD Knowledge Description": "",
    "Cues": "",
    "Cues Observations": "",
    "Cues Frequency": "",
    "Cues Strategies": "",
    "Cues Strategies Used": "",
    "Cues Other Strategies - Other": "",
    "Cues Notes Specify": "",
    "Holding": "",
    "Holding Observations": "",
    "Holding Frequency": "",
    "Holding Strategies": "",
    "Holding Strategies Used": "",
    "Holding Other Strategies Specify": "",
    "Holding Notes Specify": "",
    "Expression": "",
    "Expression Observations": "",
    "Expression Frequency": "",
    "Expression Strategies": "",
    "Expression Strategies Used": "",
    "Other Expression Strategies Specify": "",
    "Expression Notes Specify": "",
    "Empathy": "",
    "Empathy Observations": "",
    "Empathy Frequency": "",
    "Empathy Strategies": "",
    "Empathy Strategies Used": "",
    "Empathy Other Strategies Specify": "",
    "Empathy Notes Specify": "",
    "Rhythmicity/Reciprosity": "",
    "Rhythmicity/Reciprosity Observations": "",
    "Rhythmicity/Reciprosity Frequency": "",
    "Rhythmicity/Reciprosity Strategies": "",
    "Rhythmicity/Reciprosity Strategies Used": "",
    "Rhythmicity/Reciprosity Other Strategies Specify": "",
    "Rhythmicity/Reciprosity Notes Specify": "",
    "Smiles": "",
    "Smiles Observations": "",
    "Smiles Frequency": "",
    "Smiles Strategies": "",
    "Smiles Strategies Used": "",
    "Smiles Other Strategies Specify": "",
    "Smiles Notes Specify": "",
    "Additonal Comments": "",
    "Actions During this Visit": "",
    "Information/Handouts Provided": "",
    "Incentive(s) Given": "",
    "Incentive Points Redeemed": "",
    "Books Given": "",
    "Plan for Next Visit": "",
    "Topic": "",
    "Planned Method": "",
    "Goal for Next Visit": "",
    "Next Visit Date": "",
    "Next Visit Time": "",
    "Reviewed Summary": "",
    "Client Name": "",
    "Client Number": "",
    "Sp-Visit Date": "",
    "Sp-Start Time": "",
    "Sp-End Time": "",
    "Sp-Visit Duration": "",
    "SP-HFA Level": "",
    "SP-HFA Points": "",
    "Sp-Present as Visit": "",
    "SP-Curriculum": "",
    "Sp-Module": ""
}`);
