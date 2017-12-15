$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sprint_one_features/Create_an_entry.feature");
formatter.feature({
  "line": 1,
  "name": "Create hotel entry",
  "description": "As a customer service personnel\nI want to enter a customer\nSo that I can have them stored in the Database",
  "id": "create-hotel-entry",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Test to create one customer entry",
  "description": "",
  "id": "create-hotel-entry;test-to-create-one-customer-entry",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully signed in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the following customer details: \"\u003chotelName\u003e\", \"\u003caddress\u003e\", \"\u003cowner\u003e\", \"\u003cphoneNumber\u003e\", \"\u003cemail\u003e\" and click on create button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see a record containing the name of the owner \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "Test data",
  "description": "",
  "id": "create-hotel-entry;test-to-create-one-customer-entry;test-data",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "hotelName",
        "address",
        "owner",
        "phoneNumber",
        "email",
        "name"
      ],
      "line": 11,
      "id": "create-hotel-entry;test-to-create-one-customer-entry;test-data;1"
    },
    {
      "cells": [
        "admin",
        "password",
        "HMRC Hotel",
        "1, New Castle road",
        "Tunde",
        "0756438992",
        "tunde@email.com",
        "Tunde"
      ],
      "line": 12,
      "id": "create-hotel-entry;test-to-create-one-customer-entry;test-data;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6520233557,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test to create one customer entry",
  "description": "",
  "id": "create-hotel-entry;test-to-create-one-customer-entry;test-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully signed in with \"admin\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the following customer details: \"HMRC Hotel\", \"1, New Castle road\", \"Tunde\", \"0756438992\", \"tunde@email.com\" and click on create button",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see a record containing the name of the owner \"Tunde\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 36
    },
    {
      "val": "password",
      "offset": 48
    }
  ],
  "location": "CreateAnEntryTestSteps.iHaveSuccessfullySignedInWithAnd(String,String)"
});
formatter.result({
  "duration": 2885704417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HMRC Hotel",
      "offset": 41
    },
    {
      "val": "1, New Castle road",
      "offset": 55
    },
    {
      "val": "Tunde",
      "offset": 77
    },
    {
      "val": "0756438992",
      "offset": 86
    },
    {
      "val": "tunde@email.com",
      "offset": 100
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "duration": 8346803001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tunde",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "duration": 25230290,
  "status": "passed"
});
formatter.after({
  "duration": 148158876,
  "status": "passed"
});
formatter.uri("sprint_one_features/create_multiple_entry.feature");
formatter.feature({
  "line": 1,
  "name": "Create multiple hotel entry",
  "description": "As a customer service personnel\nI want to enter multiple customers\nSo that I can have them stored in the Database",
  "id": "create-multiple-hotel-entry",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Test to create multiple customer entry",
  "description": "",
  "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully signed in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the following customer details: \"\u003chotelName\u003e\", \"\u003caddress\u003e\", \"\u003cowner\u003e\", \"\u003cphoneNumber\u003e\", \"\u003cemail\u003e\" and click on create button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see a record containing the name of the owner \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "Test data",
  "description": "",
  "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "hotelName",
        "address",
        "owner",
        "phoneNumber",
        "email",
        "name"
      ],
      "line": 11,
      "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;1"
    },
    {
      "cells": [
        "admin",
        "password",
        "HMRC 3 Star Hotel",
        "1, Newcastle road",
        "James",
        "080038992",
        "james@email.com",
        "James"
      ],
      "line": 12,
      "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;2"
    },
    {
      "cells": [
        "admin",
        "password",
        "HMRC 5 Star Hotel",
        "2, Newcastle road",
        "Lewis",
        "080038992",
        "lewis@email.com",
        "Lewis"
      ],
      "line": 13,
      "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;3"
    },
    {
      "cells": [
        "admin",
        "password",
        "HMRC 7 Star Hotel",
        "3, Newcastle road",
        "Comfort",
        "080038992",
        "comfort@email.com",
        "Comfort"
      ],
      "line": 14,
      "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;4"
    },
    {
      "cells": [
        "admin",
        "password",
        "HMRC 10 Star Hotel",
        "4, Newcastle road",
        "Nicole",
        "080038992",
        "nicole@email.com",
        "Nicole"
      ],
      "line": 15,
      "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2597226217,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test to create multiple customer entry",
  "description": "",
  "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully signed in with \"admin\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the following customer details: \"HMRC 3 Star Hotel\", \"1, Newcastle road\", \"James\", \"080038992\", \"james@email.com\" and click on create button",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see a record containing the name of the owner \"James\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 36
    },
    {
      "val": "password",
      "offset": 48
    }
  ],
  "location": "CreateAnEntryTestSteps.iHaveSuccessfullySignedInWithAnd(String,String)"
});
formatter.result({
  "duration": 2139770123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HMRC 3 Star Hotel",
      "offset": 41
    },
    {
      "val": "1, Newcastle road",
      "offset": 62
    },
    {
      "val": "James",
      "offset": 83
    },
    {
      "val": "080038992",
      "offset": 92
    },
    {
      "val": "james@email.com",
      "offset": 105
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "duration": 9228444752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "duration": 13585623,
  "status": "passed"
});
formatter.after({
  "duration": 123046987,
  "status": "passed"
});
formatter.before({
  "duration": 2818112474,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test to create multiple customer entry",
  "description": "",
  "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully signed in with \"admin\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the following customer details: \"HMRC 5 Star Hotel\", \"2, Newcastle road\", \"Lewis\", \"080038992\", \"lewis@email.com\" and click on create button",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see a record containing the name of the owner \"Lewis\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 36
    },
    {
      "val": "password",
      "offset": 48
    }
  ],
  "location": "CreateAnEntryTestSteps.iHaveSuccessfullySignedInWithAnd(String,String)"
});
formatter.result({
  "duration": 2226688353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HMRC 5 Star Hotel",
      "offset": 41
    },
    {
      "val": "2, Newcastle road",
      "offset": 62
    },
    {
      "val": "Lewis",
      "offset": 83
    },
    {
      "val": "080038992",
      "offset": 92
    },
    {
      "val": "lewis@email.com",
      "offset": 105
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "duration": 8957299189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lewis",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "duration": 16893758,
  "status": "passed"
});
formatter.after({
  "duration": 80913556,
  "status": "passed"
});
formatter.before({
  "duration": 2425536510,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test to create multiple customer entry",
  "description": "",
  "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully signed in with \"admin\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the following customer details: \"HMRC 7 Star Hotel\", \"3, Newcastle road\", \"Comfort\", \"080038992\", \"comfort@email.com\" and click on create button",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see a record containing the name of the owner \"Comfort\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 36
    },
    {
      "val": "password",
      "offset": 48
    }
  ],
  "location": "CreateAnEntryTestSteps.iHaveSuccessfullySignedInWithAnd(String,String)"
});
formatter.result({
  "duration": 2244585277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HMRC 7 Star Hotel",
      "offset": 41
    },
    {
      "val": "3, Newcastle road",
      "offset": 62
    },
    {
      "val": "Comfort",
      "offset": 83
    },
    {
      "val": "080038992",
      "offset": 94
    },
    {
      "val": "comfort@email.com",
      "offset": 107
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "duration": 8721957606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Comfort",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "duration": 19766112,
  "status": "passed"
});
formatter.after({
  "duration": 68480825,
  "status": "passed"
});
formatter.before({
  "duration": 2515235146,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test to create multiple customer entry",
  "description": "",
  "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully signed in with \"admin\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the following customer details: \"HMRC 10 Star Hotel\", \"4, Newcastle road\", \"Nicole\", \"080038992\", \"nicole@email.com\" and click on create button",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see a record containing the name of the owner \"Nicole\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 36
    },
    {
      "val": "password",
      "offset": 48
    }
  ],
  "location": "CreateAnEntryTestSteps.iHaveSuccessfullySignedInWithAnd(String,String)"
});
formatter.result({
  "duration": 2199140961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HMRC 10 Star Hotel",
      "offset": 41
    },
    {
      "val": "4, Newcastle road",
      "offset": 63
    },
    {
      "val": "Nicole",
      "offset": 84
    },
    {
      "val": "080038992",
      "offset": 94
    },
    {
      "val": "nicole@email.com",
      "offset": 107
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "duration": 8944110686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nicole",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "duration": 41386641,
  "status": "passed"
});
formatter.after({
  "duration": 81541415,
  "status": "passed"
});
formatter.uri("sprint_one_features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a customer Service Personnel\nI want login to the Hotel application\nSo that I create Customer entry",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.before({
  "duration": 2674693076,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Test for login functionality",
  "description": "",
  "id": "login;test-for-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the Home page of the Hotel application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I supply username \"admin\" and password \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see a Logout \"logout\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnTheHomePageOfTheHotelApplication()"
});
formatter.result({
  "duration": 775011151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "LoginTestSteps.iSupplyUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 1473241637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logout",
      "offset": 23
    }
  ],
  "location": "LoginTestSteps.iShouldSeeALogout(String)"
});
formatter.result({
  "duration": 686742165,
  "status": "passed"
});
formatter.after({
  "duration": 121691576,
  "status": "passed"
});
});