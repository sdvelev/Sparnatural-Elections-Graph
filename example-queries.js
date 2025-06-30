var example_1 = {

  "distinct": true,
    "variables": [
  {
    "termType": "Variable",
    "value": "Municipality_1"
  },
  {
    "termType": "Variable",
    "value": "ZZ_Other_2"
  }
],
    "order": null,
    "branches": [
  {
    "line": {
      "s": "Municipality_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/wikidata_entity",
      "o": "ZZ_Other_2",
      "sType": "https://elections.ontotext.com/resource/entity/Municipality",
      "oType": "http://special/ZZ_Other",
      "values": []
    },
    "children": []
  }
],
    "limit": 1000

}

var example_2 = {
  "distinct": true,
    "variables": [
  {
    "termType": "Variable",
    "value": "Party_1"
  },
  {
    "termType": "Variable",
    "value": "Z_Text_2"
  }
],
    "order": null,
    "branches": [
  {
    "line": {
      "s": "Party_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/color",
      "o": "Z_Text_2",
      "sType": "https://elections.ontotext.com/resource/entity/Party",
      "oType": "http://special/Z_Text",
      "values": []
    },
    "children": [],
    "optional": true
  }
],
    "limit": 1000
}

var example_3 = {
      "distinct": true,
      "variables": [
        {
          "termType": "Variable",
          "value": "Section_1"
        },
        {
          "termType": "Variable",
          "value": "Election_2"
        },
        {
          "termType": "Variable",
          "value": "Municipality_8"
        },
        {
          "termType": "Variable",
          "value": "Neighborhood_10"
        },
        {
          "termType": "Variable",
          "value": "ZZ_Other_12"
        },
        {
          "termType": "Variable",
          "value": "Z_Text_16"
        },
        {
          "termType": "Variable",
          "value": "District_18"
        },
        {
          "termType": "Variable",
          "value": "Z_Number_20"
        },
        {
          "termType": "Variable",
          "value": "Z_Date_22"
        }
      ],
      "order": null,
      "branches": [
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/main_election",
            "o": "Election_2",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "https://elections.ontotext.com/resource/entity/Election",
            "values": [
              {
                "label": "Парламентарни Избори 2023",
                "rdfTerm": {
                  "type": "uri",
                  "value": "https://elections.ontotext.com/resource/election/pi2023"
                }
              }
            ]
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "http://www.w3.org/2003/01/geo/wgs84_pos#hasGeometry",
            "o": "Z_Location_4",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "http://special/Z_Location",
            "values": [
              {
                "label": "<svg id=\"svgelem\" width=\"30\" height=\"30\" viewBox=\"0 0 0.29937744140625 0.20489438226064038\" xmlns=\"http://www.w3.org/2000/svg\" style=\" transform: rotateX(180deg);\" preserveAspectRatio=\"xMidYMid meet\">   <g><polygon points=\"0,0 0,0.20489438226064038 0.29937744140625,0.20489438226064038 0.29937744140625,0\" style=\"fill:#ffffff;\" /></g></svg><span>696 km²</span>",
                "type": "Rectangle",
                "coordinates": [
                  [
                    {
                      "lat": 42.5925216370156,
                      "lng": 23.203926058486108
                    },
                    {
                      "lat": 42.79741601927624,
                      "lng": 23.203926058486108
                    },
                    {
                      "lat": 42.79741601927624,
                      "lng": 23.503303499892358
                    },
                    {
                      "lat": 42.5925216370156,
                      "lng": 23.503303499892358
                    }
                  ]
                ]
              }
            ]
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/municipality_m",
            "o": "Municipality_8",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "https://elections.ontotext.com/resource/entity/Municipality",
            "values": []
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/neighborhood",
            "o": "Neighborhood_10",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "https://elections.ontotext.com/resource/entity/Neighborhood",
            "values": []
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/isMobile",
            "o": "ZZ_Other_12",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "http://special/ZZ_Other",
            "values": []
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/streetAddress",
            "o": "Z_Text_16",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "http://special/Z_Text",
            "values": []
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/district",
            "o": "District_18",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "https://elections.ontotext.com/resource/entity/District",
            "values": [
              {
                "label": "Лозенец",
                "rdfTerm": {
                  "type": "uri",
                  "value": "https://elections.ontotext.com/resource/jurisdiction/2246/09"
                }
              }
            ]
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/countMachines",
            "o": "Z_Number_20",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "http://special/Z_Number",
            "values": []
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/date",
            "o": "Z_Date_22",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "http://special/Z_Date",
            "values": []
          },
          "children": []
        }
      ],
      "limit": 1000
    }

var example_4 = {
  "distinct": true,
    "variables": [
  {
    "termType": "Variable",
    "value": "Candidate_1"
  },
  {
    "termType": "Variable",
    "value": "Election_2"
  },
  {
    "termType": "Variable",
    "value": "Election_3"
  },
  {
    "termType": "Variable",
    "value": "LocalParty_5"
  },
  {
    "termType": "Variable",
    "value": "Z_Number_9"
  },
  {
    "termType": "Variable",
    "value": "MIR_13"
  },
  {
    "termType": "Variable",
    "value": "Z_Number_11"
  }
],
    "order": null,
    "branches": [
  {
    "line": {
      "s": "Candidate_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/candidacy",
      "o": "Election_2",
      "sType": "https://elections.ontotext.com/resource/entity/Candidate",
      "oType": "https://elections.ontotext.com/resource/entity/Election",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "Election_2",
          "p": "https://elections.ontotext.com/resource/prop/direct/main_election",
          "o": "Election_3",
          "sType": "https://elections.ontotext.com/resource/entity/Election",
          "oType": "https://elections.ontotext.com/resource/entity/Election",
          "values": [
            {
              "label": "Парламентарни Избори 2022",
              "rdfTerm": {
                "type": "uri",
                "value": "https://elections.ontotext.com/resource/election/pi2022"
              }
            }
          ]
        },
        "children": []
      },
      {
        "line": {
          "s": "Election_2",
          "p": "https://elections.ontotext.com/resource/prop/direct/jurisdiction",
          "o": "MIR_13",
          "sType": "https://elections.ontotext.com/resource/entity/Election",
          "oType": "https://elections.ontotext.com/resource/entity/MIR",
          "values": [
            {
              "label": "24",
              "rdfTerm": {
                "type": "uri",
                "value": "https://elections.ontotext.com/resource/jurisdiction/24"
              }
            }
          ]
        },
        "children": []
      }
    ]
  },
  {
    "line": {
      "s": "Candidate_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/represents",
      "o": "LocalParty_5",
      "sType": "https://elections.ontotext.com/resource/entity/Candidate",
      "oType": "https://elections.ontotext.com/resource/entity/LocalParty",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "LocalParty_5",
          "p": "http://www.w3.org/2000/01/rdf-schema#label",
          "o": "Z_Text_7",
          "sType": "https://elections.ontotext.com/resource/entity/LocalParty",
          "oType": "http://special/Z_Text",
          "values": [
            {
              "label": "ПРОДЪЛЖАВАМЕ ПРОМЯНАТА",
              "regex": "ПРОДЪЛЖАВАМЕ ПРОМЯНАТА"
            }
          ]
        },
        "children": []
      },
      {
        "line": {
          "s": "LocalParty_5",
          "p": "https://elections.ontotext.com/resource/prop/direct/number",
          "o": "Z_Number_9",
          "sType": "https://elections.ontotext.com/resource/entity/LocalParty",
          "oType": "http://special/Z_Number",
          "values": []
        },
        "children": []
      }
    ]
  },
  {
    "line": {
      "s": "Candidate_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/number",
      "o": "Z_Number_11",
      "sType": "https://elections.ontotext.com/resource/entity/Candidate",
      "oType": "http://special/Z_Number",
      "values": []
    },
    "children": []
  }
],
    "limit": 1000
}

var example_5 = {
  "distinct": true,
    "variables": [
  {
    "termType": "Variable",
    "value": "Voting_1"
  },
  {
    "termType": "Variable",
    "value": "Z_Date_8"
  },
  {
    "termType": "Variable",
    "value": "ZZ_Other_10"
  },
  {
    "termType": "Variable",
    "value": "Municipality_16"
  },
  {
    "termType": "Variable",
    "value": "MIR_18"
  },
  {
    "termType": "Variable",
    "value": "Place_20"
  },
  {
    "termType": "Variable",
    "value": "ZZ_Other_12"
  }
],
    "order": null,
    "branches": [
  {
    "line": {
      "s": "Voting_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/section",
      "o": "Section_2",
      "sType": "https://elections.ontotext.com/resource/entity/Voting",
      "oType": "https://elections.ontotext.com/resource/entity/Section",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "Section_2",
          "p": "https://elections.ontotext.com/resource/prop/direct/election",
          "o": "Election_4",
          "sType": "https://elections.ontotext.com/resource/entity/Section",
          "oType": "https://elections.ontotext.com/resource/entity/Election",
          "values": []
        },
        "children": [
          {
            "line": {
              "s": "Election_4",
              "p": "https://elections.ontotext.com/resource/prop/direct/main_election",
              "o": "Election_6",
              "sType": "https://elections.ontotext.com/resource/entity/Election",
              "oType": "https://elections.ontotext.com/resource/entity/Election",
              "values": [
                {
                  "label": "Парламентарни Избори 2023",
                  "rdfTerm": {
                    "type": "uri",
                    "value": "https://elections.ontotext.com/resource/election/pi2023"
                  }
                }
              ]
            },
            "children": []
          },
          {
            "line": {
              "s": "Election_4",
              "p": "https://elections.ontotext.com/resource/prop/direct/jurisdiction",
              "o": "MIR_18",
              "sType": "https://elections.ontotext.com/resource/entity/Election",
              "oType": "https://elections.ontotext.com/resource/entity/MIR",
              "values": []
            },
            "children": []
          }
        ]
      },
      {
        "line": {
          "s": "Section_2",
          "p": "http://www.w3.org/2003/01/geo/wgs84_pos#hasGeometry",
          "o": "Z_Location_14",
          "sType": "https://elections.ontotext.com/resource/entity/Section",
          "oType": "http://special/Z_Location",
          "values": [
            {
              "label": "<svg id=\"svgelem\" width=\"30\" height=\"30\" viewBox=\"0 0 0.05355834960937145 0.04050597057232608\" xmlns=\"http://www.w3.org/2000/svg\" style=\" transform: rotateX(180deg);\" preserveAspectRatio=\"xMidYMid meet\">   <g><polygon points=\"0,0 0,0.04050597057232608 0.05355834960937145,0.04050597057232608 0.05355834960937145,0\" style=\"fill:#ffffff;\" /></g></svg><span>24 km²</span>",
              "type": "Rectangle",
              "coordinates": [
                [
                  {
                    "lat": 42.470298900959655,
                    "lng": 25.983624454820532
                  },
                  {
                    "lat": 42.51080487153198,
                    "lng": 25.983624454820532
                  },
                  {
                    "lat": 42.51080487153198,
                    "lng": 26.037182804429904
                  },
                  {
                    "lat": 42.470298900959655,
                    "lng": 26.037182804429904
                  }
                ]
              ]
            }
          ]
        },
        "children": []
      },
      {
        "line": {
          "s": "Section_2",
          "p": "https://elections.ontotext.com/resource/prop/direct/municipality_m",
          "o": "Municipality_16",
          "sType": "https://elections.ontotext.com/resource/entity/Section",
          "oType": "https://elections.ontotext.com/resource/entity/Municipality",
          "values": []
        },
        "children": []
      },
      {
        "line": {
          "s": "Section_2",
          "p": "https://elections.ontotext.com/resource/prop/direct/place",
          "o": "Place_20",
          "sType": "https://elections.ontotext.com/resource/entity/Section",
          "oType": "https://elections.ontotext.com/resource/entity/Place",
          "values": []
        },
        "children": []
      }
    ]
  },
  {
    "line": {
      "s": "Voting_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/date",
      "o": "Z_Date_8",
      "sType": "https://elections.ontotext.com/resource/entity/Voting",
      "oType": "http://special/Z_Date",
      "values": []
    },
    "children": []
  },
  {
    "line": {
      "s": "Voting_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/link_html",
      "o": "ZZ_Other_10",
      "sType": "https://elections.ontotext.com/resource/entity/Voting",
      "oType": "http://special/ZZ_Other",
      "values": []
    },
    "children": []
  },
  {
    "line": {
      "s": "Voting_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/link_pdf",
      "o": "ZZ_Other_12",
      "sType": "https://elections.ontotext.com/resource/entity/Voting",
      "oType": "http://special/ZZ_Other",
      "values": []
    },
    "children": []
  }
],
    "limit": 1000
}

var example_6 = {
  "distinct": true,
    "variables": [
  {
    "termType": "Variable",
    "value": "Place_2"
  }
],
    "order": null,
    "branches": [
  {
    "line": {
      "s": "Section_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/place",
      "o": "Place_2",
      "sType": "https://elections.ontotext.com/resource/entity/Section",
      "oType": "https://elections.ontotext.com/resource/entity/Place",
      "values": []
    },
    "children": []
  },
  {
    "line": {
      "s": "Section_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/election",
      "o": "Election_4",
      "sType": "https://elections.ontotext.com/resource/entity/Section",
      "oType": "https://elections.ontotext.com/resource/entity/Election",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "Election_4",
          "p": "https://elections.ontotext.com/resource/prop/direct/main_election",
          "o": "Election_6",
          "sType": "https://elections.ontotext.com/resource/entity/Election",
          "oType": "https://elections.ontotext.com/resource/entity/Election",
          "values": [
            {
              "label": "Парламентарни Избори 2014",
              "rdfTerm": {
                "type": "uri",
                "value": "https://elections.ontotext.com/resource/election/pi2014"
              }
            }
          ]
        },
        "children": []
      },
      {
        "line": {
          "s": "Election_4",
          "p": "https://elections.ontotext.com/resource/prop/direct/jurisdiction",
          "o": "MIR_8",
          "sType": "https://elections.ontotext.com/resource/entity/Election",
          "oType": "https://elections.ontotext.com/resource/entity/MIR",
          "values": [
            {
              "label": "21",
              "rdfTerm": {
                "type": "uri",
                "value": "https://elections.ontotext.com/resource/jurisdiction/21"
              }
            }
          ]
        },
        "children": []
      }
    ]
  }
],
    "limit": 1000
}

var example_7 = {
  "distinct": true,
    "variables": [
  {
    "termType": "Variable",
    "value": "Candidate_1"
  },
  {
    "termType": "Variable",
    "value": "Election_4"
  },
  {
    "termType": "Variable",
    "value": "Election_2"
  },
  {
    "termType": "Variable",
    "value": "LocalParty_6"
  },
  {
    "termType": "Variable",
    "value": "MIR_10"
  },
  {
    "termType": "Variable",
    "value": "Z_Number_12"
  },
  {
    "termType": "Variable",
    "value": "Z_Number_14"
  }
],
    "order": null,
    "branches": [
  {
    "line": {
      "s": "Candidate_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/candidacy",
      "o": "Election_2",
      "sType": "https://elections.ontotext.com/resource/entity/Candidate",
      "oType": "https://elections.ontotext.com/resource/entity/Election",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "Election_2",
          "p": "https://elections.ontotext.com/resource/prop/direct/main_election",
          "o": "Election_4",
          "sType": "https://elections.ontotext.com/resource/entity/Election",
          "oType": "https://elections.ontotext.com/resource/entity/Election",
          "values": [
            {
              "label": "Парламентарни Избори 2023",
              "rdfTerm": {
                "type": "uri",
                "value": "https://elections.ontotext.com/resource/election/pi2023"
              }
            }
          ]
        },
        "children": []
      },
      {
        "line": {
          "s": "Election_2",
          "p": "https://elections.ontotext.com/resource/prop/direct/jurisdiction",
          "o": "MIR_10",
          "sType": "https://elections.ontotext.com/resource/entity/Election",
          "oType": "https://elections.ontotext.com/resource/entity/MIR",
          "values": [
            {
              "label": "23",
              "rdfTerm": {
                "type": "uri",
                "value": "https://elections.ontotext.com/resource/jurisdiction/23"
              }
            }
          ]
        },
        "children": []
      }
    ]
  },
  {
    "line": {
      "s": "Candidate_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/represents",
      "o": "LocalParty_6",
      "sType": "https://elections.ontotext.com/resource/entity/Candidate",
      "oType": "https://elections.ontotext.com/resource/entity/LocalParty",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "LocalParty_6",
          "p": "http://www.w3.org/2000/01/rdf-schema#label",
          "o": "Z_Text_8",
          "sType": "https://elections.ontotext.com/resource/entity/LocalParty",
          "oType": "http://special/Z_Text",
          "values": [
            {
              "label": "ГЕРБ",
              "regex": "ГЕРБ"
            }
          ]
        },
        "children": []
      }
    ]
  },
  {
    "line": {
      "s": "Candidate_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/number",
      "o": "Z_Number_12",
      "sType": "https://elections.ontotext.com/resource/entity/Candidate",
      "oType": "http://special/Z_Number",
      "values": []
    },
    "children": []
  },
  {
    "line": {
      "s": "Candidate_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/party_number",
      "o": "Z_Number_14",
      "sType": "https://elections.ontotext.com/resource/entity/Candidate",
      "oType": "http://special/Z_Number",
      "values": []
    },
    "children": []
  }
],
    "limit": 1000
}

var example_8 = {
  "distinct": true,
    "variables": [
  {
    "termType": "Variable",
    "value": "Section_1"
  },
  {
    "termType": "Variable",
    "value": "Voting_8"
  },
  {
    "termType": "Variable",
    "value": "VotingPlace_10"
  },
  {
    "termType": "Variable",
    "value": "Z_Text_11"
  },
  {
    "termType": "Variable",
    "value": "Municipality_13"
  },
  {
    "termType": "Variable",
    "value": "Place_17"
  },
  {
    "termType": "Variable",
    "value": "Voting_19"
  },
  {
    "termType": "Variable",
    "value": "Z_Number_21"
  }
],
    "order": null,
    "branches": [
  {
    "line": {
      "s": "Section_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/election",
      "o": "Election_4",
      "sType": "https://elections.ontotext.com/resource/entity/Section",
      "oType": "https://elections.ontotext.com/resource/entity/Election",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "Election_4",
          "p": "https://elections.ontotext.com/resource/prop/direct/main_election",
          "o": "Election_6",
          "sType": "https://elections.ontotext.com/resource/entity/Election",
          "oType": "https://elections.ontotext.com/resource/entity/Election",
          "values": [
            {
              "label": "Местни Избори 2015",
              "rdfTerm": {
                "type": "uri",
                "value": "https://elections.ontotext.com/resource/election/mi2015"
              }
            }
          ]
        },
        "children": []
      },
      {
        "line": {
          "s": "Election_4",
          "p": "https://elections.ontotext.com/resource/prop/direct/jurisdiction",
          "o": "Municipality_13",
          "sType": "https://elections.ontotext.com/resource/entity/Election",
          "oType": "https://elections.ontotext.com/resource/entity/Municipality",
          "values": []
        },
        "children": [
          {
            "line": {
              "s": "Municipality_13",
              "p": "http://www.w3.org/2000/01/rdf-schema#label",
              "o": "Z_Text_15",
              "sType": "https://elections.ontotext.com/resource/entity/Municipality",
              "oType": "http://special/Z_Text",
              "values": [
                {
                  "label": "Варна",
                  "regex": "Варна"
                }
              ]
            },
            "children": []
          }
        ]
      }
    ]
  },
  {
    "line": {
      "s": "Section_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/hasResult",
      "o": "Voting_8",
      "sType": "https://elections.ontotext.com/resource/entity/Section",
      "oType": "https://elections.ontotext.com/resource/entity/Voting",
      "values": []
    },
    "children": []
  },
  {
    "line": {
      "s": "Section_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/votingPlace",
      "o": "VotingPlace_10",
      "sType": "https://elections.ontotext.com/resource/entity/Section",
      "oType": "https://elections.ontotext.com/resource/entity/VotingPlace",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "VotingPlace_10",
          "p": "https://elections.ontotext.com/resource/prop/direct/address",
          "o": "Z_Text_11",
          "sType": "https://elections.ontotext.com/resource/entity/VotingPlace",
          "oType": "http://special/Z_Text",
          "values": []
        },
        "children": []
      }
    ],
    "optional": true
  },
  {
    "line": {
      "s": "Section_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/place",
      "o": "Place_17",
      "sType": "https://elections.ontotext.com/resource/entity/Section",
      "oType": "https://elections.ontotext.com/resource/entity/Place",
      "values": []
    },
    "children": []
  },
  {
    "line": {
      "s": "Section_1",
      "p": "https://elections.ontotext.com/resource/prop/direct/hasResult",
      "o": "Voting_19",
      "sType": "https://elections.ontotext.com/resource/entity/Section",
      "oType": "https://elections.ontotext.com/resource/entity/Voting",
      "values": []
    },
    "children": [
      {
        "line": {
          "s": "Voting_19",
          "p": "https://elections.ontotext.com/resource/prop/direct/round",
          "o": "Z_Number_21",
          "sType": "https://elections.ontotext.com/resource/entity/Voting",
          "oType": "http://special/Z_Number",
          "values": [
            {
              "label": "between 2 and 2",
              "min": 2,
              "max": 2
            }
          ]
        },
        "children": []
      }
    ]
  }
],
    "limit": 1000
}

var example_9 =
    {
      "distinct": true,
      "variables": [
        {
          "termType": "Variable",
          "value": "Section_1"
        },
        {
          "termType": "Variable",
          "value": "Election_4"
        },
        {
          "termType": "Variable",
          "value": "Z_Location_6"
        },
        {
          "termType": "Variable",
          "value": "Voting_8"
        },
        {
          "termType": "Variable",
          "value": "Z_Number_12"
        },
        {
          "termType": "Variable",
          "value": "Z_Number_10"
        },
        {
          "termType": "Variable",
          "value": "Z_Number_14"
        },
        {
          "termType": "Variable",
          "value": "ZZ_Other_18"
        },
        {
          "termType": "Variable",
          "value": "ZZ_Other_20"
        }
      ],
      "order": null,
      "branches": [
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/election",
            "o": "Election_2",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "https://elections.ontotext.com/resource/entity/Election",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "Election_2",
                "p": "https://elections.ontotext.com/resource/prop/direct/main_election",
                "o": "Election_4",
                "sType": "https://elections.ontotext.com/resource/entity/Election",
                "oType": "https://elections.ontotext.com/resource/entity/Election",
                "values": []
              },
              "children": []
            }
          ]
        },
        {
          "line": {
            "s": "Section_1",
            "p": "http://www.w3.org/2003/01/geo/wgs84_pos#hasGeometry",
            "o": "Z_Location_6",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "http://special/Z_Location",
            "values": [
              {
                "label": "<svg id=\"svgelem\" width=\"30\" height=\"30\" viewBox=\"0 0 0.026006698608398438 0.017136853099948723\" xmlns=\"http://www.w3.org/2000/svg\" style=\" transform: rotateX(180deg);\" preserveAspectRatio=\"xMidYMid meet\">   <g><polygon points=\"0,0 0,0.017136853099948723 0.026006698608398438,0.017136853099948723 0.026006698608398438,0\" style=\"fill:#ffffff;\" /></g></svg><span>5 km²</span>",
                "type": "Rectangle",
                "coordinates": [
                  [
                    {
                      "lat": 42.53627221758749,
                      "lng": 25.982973573845815
                    },
                    {
                      "lat": 42.55340907068744,
                      "lng": 25.982973573845815
                    },
                    {
                      "lat": 42.55340907068744,
                      "lng": 26.008980272454213
                    },
                    {
                      "lat": 42.53627221758749,
                      "lng": 26.008980272454213
                    }
                  ]
                ]
              }
            ]
          },
          "children": []
        },
        {
          "line": {
            "s": "Section_1",
            "p": "https://elections.ontotext.com/resource/prop/direct/hasResult",
            "o": "Voting_8",
            "sType": "https://elections.ontotext.com/resource/entity/Section",
            "oType": "https://elections.ontotext.com/resource/entity/Voting",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "Voting_8",
                "p": "https://elections.ontotext.com/resource/prop/direct/voters_count",
                "o": "Z_Number_10",
                "sType": "https://elections.ontotext.com/resource/entity/Voting",
                "oType": "http://special/Z_Number",
                "values": []
              },
              "children": []
            },
            {
              "line": {
                "s": "Voting_8",
                "p": "https://elections.ontotext.com/resource/prop/direct/voters_voted_count",
                "o": "Z_Number_12",
                "sType": "https://elections.ontotext.com/resource/entity/Voting",
                "oType": "http://special/Z_Number",
                "values": []
              },
              "children": []
            },
            {
              "line": {
                "s": "Voting_8",
                "p": "https://elections.ontotext.com/resource/prop/direct/votes_valid_count",
                "o": "Z_Number_14",
                "sType": "https://elections.ontotext.com/resource/entity/Voting",
                "oType": "http://special/Z_Number",
                "values": []
              },
              "children": []
            },
            {
              "line": {
                "s": "Voting_8",
                "p": "https://elections.ontotext.com/resource/prop/direct/link_html",
                "o": "ZZ_Other_18",
                "sType": "https://elections.ontotext.com/resource/entity/Voting",
                "oType": "http://special/ZZ_Other",
                "values": []
              },
              "children": [],
              "optional": true
            },
            {
              "line": {
                "s": "Voting_8",
                "p": "https://elections.ontotext.com/resource/prop/direct/link_pdf",
                "o": "ZZ_Other_20",
                "sType": "https://elections.ontotext.com/resource/entity/Voting",
                "oType": "http://special/ZZ_Other",
                "values": []
              },
              "children": [],
              "optional": true
            }
          ]
        }
      ],
      "limit": 1000
    }