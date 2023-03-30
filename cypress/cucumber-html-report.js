const report = require("multiple-cucumber-html-reporter");

var st = new Date().toLocaleString();
var start = new Date().getTime();
report.generate({
    jsonDir: "cypress/reports/cucumberreport",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "94",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "10",
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Smoke suite' },
            {
                label: "Execution Start Time",
                value: `${st}`,
            },
            {
                label: "Execution End Time",
                value: `${st}`,
            },
        ]
    },
    customizedReportName: 'All products Smoke suite'
});