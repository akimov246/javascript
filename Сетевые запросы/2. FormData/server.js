const Fastify = require('fastify');
const fastifyMultipart = require('@fastify/multipart');
const cors = require('@fastify/cors');

const port = 3000;

const app = Fastify();

// Подключаем поддержку multipart/form-data
app.register(fastifyMultipart);

app.register(cors, {
    origin: '*'
});

app.post('/post/user', async (req, res) => {
    const parts = await req.parts();
    const fields = {};

    for await (const part of parts) {
        if (part.type === 'field') {
            fields[part.fieldname] = part.value;
        }
    }

    let result = '';
    for (let field in fields) {
        result += `${field}: ${fields[field]}\n`;
    }
    res.type('application/json').send({
        message: `Ответ от сервера:\nПолучен пользователь из формы:\n${result}`
    });
});

app.post('/post/avatar', async (req, res) => {
    const parts = await req.parts();
    let result = {};

    for await (let part of parts) {
        if (part.file) {
            let chunks = [];
            for await (let chunk of part.file) {
                chunks.push(chunk);
            }
            let buffer = Buffer.concat(chunks);
            result[part.fieldname] = {
                array: new Uint8Array(buffer).toString()
            };
        } else {
            result[part.fieldname] = `Ответ от сервера:\nВот аватарка пользователя ${part.value}`;
        }
    }

    res.type('application/json').send(result);
});

app.listen({port: port}, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});