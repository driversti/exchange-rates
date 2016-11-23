var fetch =require('isomorphic-fetch');

var http = require('http');

const props = {
    baseUrl: 'http://www.cbr.ru/scripts/XML_daily.asp',
    dateReq: '?date_req='
};

http.createServer(
    (request, response) => {
        get()
            .then(r => {
                response.writeHead(200, { 'Content-Type': 'application/json' });
                console.log(typeof r);
                response.write(JSON.stringify(r) + '\n');
                response.end();
            })
            .catch(e => console.log(e));
    }
).listen(8888);


console.log('Server started on port 8888');

function get(params = undefined) {

    let url = props.baseUrl;
    params ? url += props.dateReq + params : null;

    //console.log(url);

    let method = 'GET';
    let body = undefined;
    const headers = {};

    return fetch(url, {
        method,
        body,
        credentials: 'same-origin',
        headers,
        mode: 'cors',
        cache: 'no-cache'
    })
}