
const fs = require('fs');

const appPage = fs.readFileSync(`${__dirname}/../client/app.html`); //eslint-disable-line
const mainPage = fs.readFileSync(`${__dirname}/../client/client.html`); //eslint-disable-line
const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`); //eslint-disable-line
const css = fs.readFileSync(`${__dirname}/../client/default-styles.css`); //eslint-disable-line
const imageObiwan = fs.readFileSync(`${__dirname}/../client/obiwan.jpg`); //eslint-disable-line
function getResponse(contentType, content, request, response) {
    response.writeHead(200, {'Content-Type': contentType});
    response.write(content);
    response.end();
}

const appPageResponse = (request, response) => {
    getResponse('text/html', appPage, request, response);
}
const mainPageResponse = (request, response) => {
    getResponse('text/html', mainPage, request, response);
}

const get404Response = (request, response) => {
    getResponse('text/html', errorPage, request, response);
}
const cssResponse = (request, response) => {
    getResponse('text/css', css, request, response);
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