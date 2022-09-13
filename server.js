import args from './config/config.js';
const {express, path, app, firebaseConfig, http, storage} = args;
app.use(express.json);

const PORT = process.env.PORT || 8080;

function start(){
    try{
        app.listen(PORT, function () {
            console.log(
                `Сервер начал прослушивание запросов на порту ${PORT}`
            );
        });
    }catch (e){
        console.log(e)}
}


start()