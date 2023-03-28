const url2="https://hojiro-firm.jp/";


fetch(url2,{
    method: 'GET',
    Mode: 'no-cors',
    headers: {
        accept: 'application/html',
    },})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.text();
    })
    .then((json) => initialize(json))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));


