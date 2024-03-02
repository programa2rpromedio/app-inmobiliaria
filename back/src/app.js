import express from "express";
import apiRouter from "./routes/app.router.js";
import { PORT } from "./config/env.config.js";
import { connect } from "./config/db.config.js";
// import { connect } from "./config/db.config.js";

const app = express();

(async () => await connect())();

//Middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next()
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(PORT, () => console.log("Server up an running on port ", PORT));

// console.log(require('crypto').randomBytes(64).toString('hex'))
