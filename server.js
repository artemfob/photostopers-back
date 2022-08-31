import {express, path, app, firebase, firebaseConfig} from 'config.js';

await firebase.initializeApp(firebaseConfig);

const PORT = process.env.PORT||80;

app.get('/',(req, res)=>{
    res.end('<h1>server work</h1>')
});

app.createServer(function (request, response) {
    response.end('Hello NodeJS!')
})
    .listen(PORT, '127.0.0.1', function () {
        console.log(
            `Сервер начал прослушивание запросов на порту ${PORT}`
        )
    });