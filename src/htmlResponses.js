
const fs = require('fs');

const appPage = fs.readFileSync(`${__dirname}/../client/app.html`); //eslint-disable-line
const mainPage = fs.readFileSync(`${__dirname}/../client/client.html`); //eslint-disable-line
const suggestPage = fs.readFileSync(`${__dirname}/../client/addQuestion.html`); //eslint-disable-line
const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`); //eslint-disable-line
const css = fs.readFileSync(`${__dirname}/../client/default-styles.css`); //eslint-disable-line
const imageObiwan = fs.readFileSync(`${__dirname}/../client/obiwan.jpg`); //eslint-disable-line
console.log(imageObiwan);

function getResponse(statusCode, contentType, content, request, response) {
    response.writeHead(statusCode, {'Content-Type': contentType});
    response.write(content);
    response.end();
}

const appPageResponse = (request, response) => {
    getResponse(200, 'text/html', appPage, request, response);
}
const mainPageResponse = (request, response) => {
    getResponse(200, 'text/html', mainPage, request, response);
}

const suggestPageResponse = (request, response) => {
    getResponse(200, 'text/html', suggestPage, request, response);
}
const get404Response = (request, response) => {
    getResponse(404,'text/html', errorPage, request, response);
}
const cssResponse = (request, response) => {
    getResponse(200,'text/css', css, request, response);
}

const imageResponse = (request, response) => {
    response.writeHead(200, {'Content-Type': 'image/jpg'});
    response.write(imageObiwan);
    response.end();

}

module.exports.get404Response = get404Response;
module.exports.cssResponse = cssResponse;
module.exports.mainPageResponse = mainPageResponse;
module.exports.appPage = appPageResponse;
module.exports.imageResponse = imageResponse;
module.exports.suggestPageResponse = suggestPageResponse;