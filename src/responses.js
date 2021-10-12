//const https = require('https');
const fs = require('fs');
const https = require('https');
const triviaObj = {};
let data = fs.readFileSync('./src/trivia.json','utf8');
let writeData = '';
const getResponse = (request, response, params, acceptedTypes, httpMethod) => { //eslint-disable-line
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.write(data);
    response.end();
}

const getApiResponse = (request, response, params, acceptedTypes, httpMethod) => { //eslint-disable-line
    response.writeHead(200, {'Content-Type': 'text/json'});
    https.get(`https://swapi.dev/api/${params.value}`, resp => {
        resp.on('data', data=> {
            writeData += data;
        })
        resp.on('end', () => {
            console.log(writeData);
        })
    })
    response.write(writeData);
    response.end();
}
// Doesn't work
const postResponse = (request, response, body) =>{

    let responseCode = 201;

    if (triviaObj[body.setup]) {
        responseCode = 204;
    } else {
        triviaObj[body.setup] = {};
    }

    triviaObj[body.setup].setup = body.setup;
    triviaObj[body.setup].trivia = body.trivia;

    if (responseCode === 201) {
        responseJSON.message = 'Created Successfully'; //eslint-disable-line
        response.writeHead(201, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(responseJSON)); //eslint-disable-line
        response.end();
      }
    
      return respondJSONMeta(request, response, responseCode); //eslint-disable-line
}

 module.exports.getResponse = getResponse;
module.exports.getApiResponse = getApiResponse;
module.exports.postResponse = postResponse;