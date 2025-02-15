import { Router } from "express";
import userRoute from "./user.routes.js";
import CommentRouter from "./Comment.routes.js";
import lessonRouter from "./Lesson.routes.js";
import categoryRoute from "./category.routes.js";
import courseRoute from "./course.routes.js";

const mainRoute = Router();

mainRoute.use("/users", userRoute);
mainRoute.use("/comment", CommentRouter);
mainRoute.use("/lesson", lessonRouter);
mainRoute.use("/category", categoryRoute);
mainRoute.use("/course", courseRoute);

export default mainRoute;
