'use strict';

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(container, data) {
    if (data && Object.keys(data).length) {
        let ul = document.createElement("ul");
        container.append(ul);
        for (let key in data) {
            let li = document.createElement("li");
            li.textContent = key;
            ul.append(li);
            createTree(li, data[key]);
        }
    }
}

let container = document.getElementById('container');
createTree(container, data);