import { Router } from "express";
import CommentRouter from "./Comment.routes.js";
import LissonRouter from "./Lesson.routes.js";

const MainRouter = Router();

MainRouter.use("/comment", CommentRouter);
MainRouter.use("/lesson",LissonRouter);

export default MainRouter;