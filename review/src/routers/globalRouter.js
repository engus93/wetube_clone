import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getLogin,
  postLogin,
  getJoin,
  postJoin,
  logout,
  githubLogin,
  postGithubLogIn,
  getMe,
  facebookLogin,
  postFacebookLogin
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

// Home
globalRouter.get(routes.home, home);

// Search
globalRouter.get(routes.search, search);

// Join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, postJoin, onlyPublic, postLogin);

// Log In
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

// Log Out
globalRouter.get(routes.logout, onlyPrivate, logout);

// Github Log In
globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
