const url2="https://www.google.com";


fetch(url2)
    .then(response => {
        return response.text();
    })
    .then(html => {
        console.log(html);
    })
    .catch(error => {
        console.error(error);
    });

