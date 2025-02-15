import { Router } from "express";
import {
   create,
   findAll,
   findBySearch,
   findOne,
   remove,
   update,
} from "../controllers/course.controller.js";

const courseRoute = Router();

courseRoute.get("/search", findBySearch);

courseRoute.get("/", findAll);

courseRoute.get("/:id", findOne);

courseRoute.post("/", create);

courseRoute.patch("/:id", update);

courseRoute.delete("/:id", remove);

export default courseRoute;
