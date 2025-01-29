'use strict';

// Задачи

// Перепишите, используя async/await
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    }
    throw new HttpError(response);
}

// loadJson('no-such-user.json')
//     .then(user => console.log(user))
//     .catch(console.log);

// Перепишите, используя async/await
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function demoGithubUser() {
    let githubUser;
    do {
        try {
            //let name = prompt('Github login:');
            let name = 'akimov246';
            githubUser = await loadJson(`https://api.github.com/users/${name}`);
            console.log(githubUser.name || 'Имя не задано');
            return githubUser;
        } catch (error) {
            if (error instanceof HttpError && error.response.status === 404) {
                console.log(`Пользователя ${name} не существует, пожалуйста, повторите ввод.`)
            } else {
                throw error;
            }
        }
    } while (!githubUser)
}

demoGithubUser();

// Вызовите async-функцию из "обычной"
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return 10;
}

function f() {
    wait().then(result => console.log(result));
}

f();