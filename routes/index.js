import { Router } from "express";
import CommentRouter from "./Comment.routes.js";
import LissonRouter from "./Lesson.routes.js";
import categoryRoute from "./category.routes.js";
import courseRoute from "./course.routes.js";

const mainRoute = Router();

mainRoute.use("/comment", CommentRouter);
mainRoute.use("/lesson",LissonRouter);
mainRoute.use("/category", categoryRoute);
mainRoute.use("/course", courseRoute);

export default mainRoute;
