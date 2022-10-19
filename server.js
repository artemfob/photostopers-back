import args from "./config/config.js";
import router from "./router.js";
const { express, path, app, firestore } = args;

app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 10000;

function start() {
  try {
    app.listen(PORT, function () {
      console.log(`Сервер начал прослушивание запросов на порту ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
