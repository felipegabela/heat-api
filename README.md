# heat-api

Simple Node.js RESTful API that collects and grades heat worksheets.  

## Install
Install node.js and npm in your computer.
Clone the repository. `git clone git@github.com:felipegabela/heat-api.git` 
Run `npm install` inside the directory where you cloned the repository to install all the dependencies.

## Run API 
Run `npm start` inside the directory where you cloned the repository to start the server.

## Test Endpoints

Use the Postman Chrome extension or app to test the endpoints. Use localhost:3000/

# API Reference

The Heat API is organized around REST. The API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes and verbs. 

## Errors

The Heat API uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.). Codes in the 5xx range indicate an error with our servers.

## Grade

Grade is used for collecting, grading, and storing in the database a students worksheet.

### Endpoints 
`POST /grade`

You must pass the worksheet data as JSON-encoded body. All properties are required.
Example body:
```json
{
    "studentName": "Oliver Little",
    "worksheetName": "W3",
    "questions": [
        {
            "inputTemperature": "300.13",
            "inputUnits": "Celsius",
            "targetUnits": "Fahrenheit",
            "studentResponse": "-149f"
        },
        {
            "inputTemperature": "300.13",
            "inputUnits": "Celsius",
            "targetUnits": "Kelvin",
            "studentResponse": "573.51"
        },
        {
            "inputTemperature": "300.13",
            "inputUnits": "Celsius",
            "targetUnits": "Rankine",
            "studentResponse": "761"
        },
        {
            "inputTemperature": "300.13",
            "inputUnits": "Celsius",
            "targetUnits": "Fahrenheit",
            "studentResponse": "572"
        },
        {
            "inputTemperature": "300.13",
            "inputUnits": "Celsius",
            "targetUnits": "Kelvin",
            "studentResponse": "572.6"
        },
        {
            "inputTemperature": "300.13",
            "inputUnits": "Celsius",
            "targetUnits": "Rankine",
            "studentResponse": "1032.45"
        }
    ]
}
```

## Reports

Reports is used to retrive graded worksheets. You can retrieve individual worksheets from a single student or all worksheet from a single student. 

### Endpoints 
`GET /reports/:worksheetName/:studentName` 
`GET /reports/:studentName`

You must replace spaces with hyphens. For example:
`GET /reports/Suprise-Worksheet/John Doe`

Empty responses mean there aren't any documents that match those parameters. 