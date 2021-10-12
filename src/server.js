// Declare required modules
const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses');
const responseHandler = require('./responses');

// UrlStruct
const urlStruct = {
    '/': htmlHandler.mainPageResponse,
    '/app' : htmlHandler.appPage,
    '/admin': responseHandler.getApiResponse,
    '/study': responseHandler.getResponse,
    '/submit-joke': htmlHandler.suggestPageResponse,  //Suggest joke
    '/addTrivia' : responseHandler.postResponse,
    '/obiwan.jpg' : htmlHandler.imageResponse,
    '/default-styles.css': htmlHandler.cssResponse,
    notFound  : htmlHandler.get404Response
};
// eslint-disable-next-line
const port = process.env.PORT || process.env.NODE_PORT || 3000;


const onRequest = (req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const params = query.parse(parsedUrl.query);
    const httpMethod = req.method;


    let acceptedTypes = req.headers.accept && req.headers.accept.split(',');
    acceptedTypes = acceptedTypes || [];
    console.log(acceptedTypes);
  
    if (urlStruct[pathname]) {
        urlStruct[pathname](req, res, params, acceptedTypes, httpMethod);
    } else {
        urlStruct.notFound(req, res);
    }
}

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);

