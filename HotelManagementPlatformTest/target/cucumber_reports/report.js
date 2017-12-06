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
        "0123456789",
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
  "duration": 16855994917,
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
  "name": "I enter the following customer details: \"HMRC Hotel\", \"1, New Castle road\", \"Tunde\", \"0123456789\", \"tunde@email.com\" and click on create button",
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
  "duration": 4260783644,
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
      "val": "0123456789",
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
  "duration": 3719753175,
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
  "duration": 67450370,
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
        "John",
        "0123456789",
        "john@email.com",
        "John"
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
        "Kelvin",
        "0123456789",
        "kelvin@email.com",
        "Kelvin"
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
        "Brian",
        "0123456789",
        "brian@email.com",
        "Brian"
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
        "Daniel",
        "0123456789",
        "daniel@email.com",
        "Daniel"
      ],
      "line": 15,
      "id": "create-multiple-hotel-entry;test-to-create-multiple-customer-entry;test-data;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5151253,
  "error_message": "java.lang.NullPointerException\n\tat org.hmp.browsers.SharedBrowsers.initialiseBrowser(SharedBrowsers.java:28)\n\tat org.hmp.hooks.StepHooks.setUpTest(StepHooks.java:23)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
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
  "name": "I enter the following customer details: \"HMRC 3 Star Hotel\", \"1, Newcastle road\", \"John\", \"0123456789\", \"john@email.com\" and click on create button",
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
  "name": "I should see a record containing the name of the owner \"John\"",
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
  "status": "skipped"
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
      "val": "John",
      "offset": 83
    },
    {
      "val": "0123456789",
      "offset": 91
    },
    {
      "val": "john@email.com",
      "offset": 105
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 199135,
  "error_message": "java.lang.NullPointerException\n\tat org.hmp.browsers.SharedBrowsers.initialiseBrowser(SharedBrowsers.java:28)\n\tat org.hmp.hooks.StepHooks.setUpTest(StepHooks.java:23)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
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
  "name": "I enter the following customer details: \"HMRC 5 Star Hotel\", \"2, Newcastle road\", \"Kelvin\", \"0123456789\", \"kelvin@email.com\" and click on create button",
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
  "name": "I should see a record containing the name of the owner \"Kelvin\"",
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
  "status": "skipped"
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
      "val": "Kelvin",
      "offset": 83
    },
    {
      "val": "0123456789",
      "offset": 93
    },
    {
      "val": "kelvin@email.com",
      "offset": 107
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kelvin",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 20848468,
  "error_message": "java.lang.NullPointerException\n\tat org.hmp.browsers.SharedBrowsers.initialiseBrowser(SharedBrowsers.java:28)\n\tat org.hmp.hooks.StepHooks.setUpTest(StepHooks.java:23)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
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
  "name": "I enter the following customer details: \"HMRC 7 Star Hotel\", \"3, Newcastle road\", \"Brian\", \"0123456789\", \"brian@email.com\" and click on create button",
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
  "name": "I should see a record containing the name of the owner \"Brian\"",
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
  "status": "skipped"
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
      "val": "Brian",
      "offset": 83
    },
    {
      "val": "0123456789",
      "offset": 92
    },
    {
      "val": "brian@email.com",
      "offset": 106
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 245121,
  "error_message": "java.lang.NullPointerException\n\tat org.hmp.browsers.SharedBrowsers.initialiseBrowser(SharedBrowsers.java:28)\n\tat org.hmp.hooks.StepHooks.setUpTest(StepHooks.java:23)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
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
  "name": "I enter the following customer details: \"HMRC 10 Star Hotel\", \"4, Newcastle road\", \"Daniel\", \"0123456789\", \"daniel@email.com\" and click on create button",
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
  "name": "I should see a record containing the name of the owner \"Daniel\"",
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
  "status": "skipped"
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
      "val": "Daniel",
      "offset": 84
    },
    {
      "val": "0123456789",
      "offset": 94
    },
    {
      "val": "daniel@email.com",
      "offset": 108
    }
  ],
  "location": "CreateAnEntryTestSteps.iEnterTheFollowingCustomerDetailsAndClickOnCreateButton(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Daniel",
      "offset": 56
    }
  ],
  "location": "CreateAnEntryTestSteps.iShouldSeeARecordContainingTheNameOfTheOwner(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 296796,
  "error_message": "java.lang.NullPointerException\n\tat org.hmp.browsers.SharedBrowsers.initialiseBrowser(SharedBrowsers.java:28)\n\tat org.hmp.hooks.StepHooks.setUpTest(StepHooks.java:23)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
});