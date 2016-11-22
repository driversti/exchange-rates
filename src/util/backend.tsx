import fetch from 'isomorphic-fetch';

const props = {
    baseUrl: 'http://www.cbr.ru/scripts/XML_daily.asp',
    dateReq: '?date_req='
};



async function confirmSuccessResponse(response) {
    console.log(response);
    if (response.status >= 200 && response.status < 300)
        return response;

    let error = new Error(await response.text() || response.statusText);
    throw error;
}

async function parseResponse(response) {
    let contentType = response.headers.get('content-type');

    if (contentType && contentType.indexOf('text/xml') != -1) {
        return await response.text();
    } else {
        return await response.text();
    }
}

export function get(params = undefined) {

    let url = props.baseUrl;
    params ? url += props.dateReq + params : null;

    console.log(url);

    let method = 'GET';
    let body = undefined;
    const headers = {};
/*
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            body,
            credentials: 'include',
            //mode: 'no-cors',
            headers,
            cache: 'no-cache'
        })
            //.then( confirmSuccessResponse )
            //.then( response => parseResponse(response) )
            .then( response => resolve(response) )
            .catch( error => reject(error) );
    });*/

    return fetch(url, {
        method,
        body,
        credentials: 'same-origin',
        headers,
        mode: 'cors',
        cache: 'no-cache'
    })
}