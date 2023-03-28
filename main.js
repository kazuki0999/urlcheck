const url2="https://www.google.com";


fetch(url2,{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached

    headers: {
        'Content-Type': 'application/html'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },})
    .then(response => {
        return response.text();
    })
    .then(html => {
        console.log(html);
    })
    .catch(error => {
        console.error(error);
    });

