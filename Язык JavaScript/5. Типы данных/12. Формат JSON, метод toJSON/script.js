'use strict';

// Задачи

// Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
  name: "Василий Иванович",
  age: 35
};

let json_user = JSON.stringify(user);
console.log(json_user);
let user_from_json = JSON.parse(json_user);
console.log(user_from_json);

// Исключить обратные ссылки
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function (key, value) {
    return (value === meetup && key !== '') ? undefined : value;
}));