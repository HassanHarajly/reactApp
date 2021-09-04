export function callDogFactsApi() {
    return fetch('http://localhost:8080/hello', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(({facts}) => {
            return facts;
        })
}

