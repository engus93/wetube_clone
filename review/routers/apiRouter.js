// API Router

import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/videoController";

const apiRouter = express.Router();

// Register
apiRouter.post(routes.registerView, postRegisterView);

export default apiRouter;
