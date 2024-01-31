import express from "express";
import apiRouter from "./routes/app.router.js";
import { PORT } from "./config/env.config.js";
import { connect } from "./config/db.config.js";
// import { connect } from "./config/db.config.js";

const app = express();

(async () => await connect())();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(PORT, () => console.log("Server up an running on port ", PORT));
