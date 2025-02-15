import { Router } from "express";
import {
   create,
   findAll,
   findBySeorch,
   findOne,
   pages,
   remove,
   update,
} from "../controllers/Lesson.controller.js";

const lessonRouter = Router();

lessonRouter.get("/", findAll);

lessonRouter.get("/pages", pages);

lessonRouter.get("/search", findBySeorch);

lessonRouter.get("/:id", findOne);

lessonRouter.post("/", create);

lessonRouter.patch("/:id", update);

lessonRouter.delete("/:id", remove);

export default lessonRouter;
