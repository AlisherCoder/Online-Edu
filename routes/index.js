import { Router } from "express";
import categoryRoute from "./category.routes.js";
import courseRoute from "./course.routes.js";

const mainRoute = Router();

mainRoute.use("/category", categoryRoute);
mainRoute.use("/course", courseRoute);

export default mainRoute;
