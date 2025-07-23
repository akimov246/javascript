'use strict';

let users = ['akimov246', 'iliakan', 'remy', 'no.such.users', 'pidarmot', 'Ivan'];

async function getUsers(names) {
    let promises = [];
    for (let name of names) {
        let promise = fetch(`https://api.github.com/users/${name}`)
            .then(response => {
                //console.log(response);
                if (response.ok) return response.json();
                else return null;
            }).then(json => {
                if (json) {
                    return {
                        'login': json.login,
                        'name': json.name,
                    }
                } else return null
            }).catch(() => null);
        promises.push(promise);
    }

    let results = await Promise.allSettled(promises);
    return results.map((item) => {
        if (item.status === 'fulfilled') {
            return item.value;
        }
        return null;
    });
}

getUsers(users)
   .then(results => console.log(results));