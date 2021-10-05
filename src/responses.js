//const https = require('https');
const fs = require('fs');
let data = fs.readFileSync('./src/trivia.json','utf8');

const getResponse = (request, response, params, acceptedTypes, httpMethod) => { //eslint-disable-line
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.write(data);
    response.end();
}

module.exports.getResponse = getResponse;
