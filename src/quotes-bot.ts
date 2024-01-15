import superagent from 'superagent';

console.log("Quote Bot Started")

let i = 1;

function getQuote() {
    superagent
        .get(`http://localhost:8000/quote`)
        .then((res) => {
            console.log(res.body)
        })
        .catch(console.error);
}

// Run the first time
getQuote();
i++;

// Then run every 10 seconds
setInterval(() => {
    getQuote()
}, 10000);
