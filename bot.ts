import superagent from 'superagent';

console.log("Starwars Bot Starting")

let i = 1;

function useTheForce(person: number) {
    superagent
        .get(`https://swapi.dev/api/people/${person}`)
        .then((res) => {
            console.log(res.body.name)
        })
        .catch(console.error);
}

// Run the first time
useTheForce(i);
i++;

// Then run every 10 seconds
setInterval(() => {
    useTheForce(i)
    if (i === 5) {
        i = 1
    } else { i++ }
}, 10000);
