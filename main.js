const url2="https://hojiro-firm.jp/";


fetch(url2)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.text();
    })
    .then((json) => initialize(json))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));


