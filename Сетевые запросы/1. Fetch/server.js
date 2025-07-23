const port = 3000;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const {use} = require("express/lib/application");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.raw({type: 'image/*'}));

app.post('/post/user', (req, res) => {
    const user = req.body;
    console.log('Полученные данные:', user);
    res.json({
        message: `Пользователь ${user.name} ${user.surname} спешно сохранен.`
    });
});

app.post('/post/image', (req, res) => {
    const image = req.body;
    console.log(`Получен blob`);
    res.setHeader('Content-Type', 'image/png');
    res.send(image);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});