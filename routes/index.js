import { Router } from "express";
import CommentRouter from "./Comment.routes.js";
import LissonRouter from "./Lisson.routes.js";

const MainRouter = Router();

MainRouter.use("/comment", CommentRouter);
MainRouter.use("/lisson",LissonRouter);

export default MainRouter;