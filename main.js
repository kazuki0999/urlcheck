const url2="https://hojiro-firm.jp/";


fetch("hojiro-firm.jp/",{
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
    .then((function (html) {
        console.log(html);
    }));
    // .catch((err) => console.error(`Fetch problem: ${err.message}`));


