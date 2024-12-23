# QNAService Test Automation

This is a UI automation using Cypress + JavaScript with Cucumber BDD framework

1. Pre-requisite  - NodeJs , Docker(to execute and run the containers) , IDE(VS Code / IntelliJ)

2. In the root directory of the project, run the following command:
```bash
docker-compose up 

  To make containers up and running and accessible to the UI
```
3. Access the Web UI using following URL - http://localhost:8000

4. Unzip the submitted code.
5. Install dependencies using below command 
   `npm install`
Once installation was done successfully run the following command to run the test scripts - `npx cypress run`

10. Execute QNAService.feature file which contains test scenarios.


**Command to Run all the Test Cases under e2e -**
In Interactive mode:
Command 1 - To Open your cypress runner and select the browser - `npx cypress open`

![](C:\Users\inthi\Desktop\Tetscase.png)

headless mode :

Command 2 - `npx cypress run`
Command 3 - To Run specific spec file - `npx cypress run --spec cypress/e2e/features/QNAService.feature`
Command 4 - To Run specific spec file in specific Browser - `npx cypress run --spec cypress/e2e/features/QNAService.feature --browser chrome`

Added auto scripts in package.json file 

"scripts": {
    "cypress:run": "cypress run",
    "generate-report": "node cypress.report.js",
    "execute:report": "npm run cypress:run && npm run generate-report"
  },

![](C:\Users\inthi\Desktop\report.png)

**Scenarios Identified  :**
1. File Upload
2. Verify File Upload is Success
3. Verify File is processed
4. Deletion of File
5. Validate that the query result and references are removed after the file has been deleted - This is not happening it might be an issue
6. Same File is allowed to upload multiple times
7. Verify the proper assertion if query entered is incorrect and invalid file format is uploaded

Few Observations:
1. Though the scenario is for a single document upload when I uploaded multiple documents few performance issues identified.
2. Few UI functional issues observed.

