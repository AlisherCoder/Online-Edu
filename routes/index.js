import { Router } from "express";
import userRoute from "./user.routes.js";

const mainRoute = Router();

mainRoute.use("/users", userRoute);

export default mainRoute;
