import { Router } from "express";
import CommentRouter from "./Comment.routes.js";
import LissonRouter from "./Lesson.routes.js";
import categoryRoute from "./category.routes.js";
import courseRoute from "./course.routes.js";

const MainRouter = Router();

MainRouter.use("/comment", CommentRouter);
MainRouter.use("/lesson",LissonRouter);
MainRoute.use("/category", categoryRoute);
MainRoute.use("/course", courseRoute);

export default MainRouter;
