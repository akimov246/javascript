'use strict';

// Задачи

// Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
    //let password = prompt("Password?", '');
    let password = 'rockstar';
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Использование частично примененной функции для логина
function askPassword2(ok, fail) {
    //let password = prompt("Password?", '');
    let password2 = 'rockstar';
    if (password2 === "rockstar") ok();
    else fail();
}

let user2 = {
    name: 'John',

    login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false)); // ?