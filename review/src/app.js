// import는 abc 순서로 하자
import flash from "express-flash";
import "@babel/polyfill";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoStore from "connect-mongo";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import path from "path";
import mongoose from "mongoose";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";

import "./passport";

const app = express();

const CookieStore = mongoStore(session);

// 보안 미들웨인 helmet을 제일 위에 둠
app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
