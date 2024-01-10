import superagent from 'superagent';

let i = 1;

function useTheForce(person: number) {
    superagent
        .get(`https://swapi.dev/api/people/${person}`)
        .then((res) => {
            console.log(res.body.name)
        })
        .catch(console.error);
}

setTimeout(() => {
    useTheForce(i)
    if (i === 5) {
        i = 1
    } else { i++ }
}, 10000);
