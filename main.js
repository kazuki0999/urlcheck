const url2="https://hojiro-firm.jp/";


fetch(url2)
    .then(response => {
        if (response.ok) {
            return response.text(); // HTMLを取得する
        } else {
            throw new Error('Error: Could not retrieve HTML');
        }
    })
    .then(html => {
        console.log(html); // HTMLを表示する
    })
    .catch(error => {
        console.error(error);
    });


