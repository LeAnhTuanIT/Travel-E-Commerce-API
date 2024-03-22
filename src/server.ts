import express, { response } from "express";
import http from "http";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

// config env
config({
  path: "./config/.env",
});

const port = process.env.PORT;
const domain = process.env.DOMAIN;
const client = process.env.CLIENT_URL;

// config server
const app = express();
const server = http.createServer(app);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: client,
    credentials: true,
  })
);

// config middleware

// config router

// config error handler

// start server'
server.listen(port, () => {
  console.log(`Server runing on ${domain}${port}`);
});
