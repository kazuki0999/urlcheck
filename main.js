const url2="https://hojiro-firm.jp/";


const fetchHtml = async (url) => {
    const opts = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'text/html',
        },
    };
    console.log(url);
    try {
        const resp = await fetch(url, opts);

        if (resp.ok) {
            const text= resp.text();
            let parser = new DOMParser();
            let doc = parser.parseFromString(text, 'text/html');
            console.log(doc.title);
        } else {
            console.error("fetchHtml is failed! url : " + url + ", error : status is not 200");
            return null;
        }
    } catch(error) {
        console.error("fetchHtml is failed! url : " + url + ", error : " + error);
        return null;
    }
};


fetchHtml(url2);