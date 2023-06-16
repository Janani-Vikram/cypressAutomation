# Cypress-Parallelization
Make your test run faster by configuring your CI provider to run across multiple machines 

## Run your Cypress test in Parallel using GitHub Actions
### How to use
1. Clone the project
2. ```npm i``` - Install all the dependencies
3. Run ```npx cypress run``` to execute the tests in CLI

### Cypress Cloud setup
1. Login to **Cypress Cloud** to record your test
2. Setup Project ( - 
3. Add *projectId* in **cypress.config.js** file
4. Set *record key* in GitHub secrets
5. To record your scripts in Cypress cloud, use the below command

```
npx cypress run --record --key $CYPRESS_RECORD_KEY
```
(Refer - https://docs.cypress.io/guides/cloud/getting-started)

### Parallelization
1. Run copies of the current job in parallel using *containers*, add the below code in main.yml file

```
strategy:
      fail-fast: false
      matrix:
        #number of machines needs to execute the script
        containers: [1, 2, 3, 4]  
```
2. To run the script in parallel, use the below command

```
npx cypress run --record --key $CYPRESS_RECORD_KEY --parallel
```
(Refer - https://docs.cypress.io/guides/continuous-integration/github-actions)
