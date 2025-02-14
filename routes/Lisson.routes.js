import {Router} from "express";
import { create, findAll, findBySeorch, findOne, remove, update } from "../controllers/Comment.controller.js";

const LissonRouter = Router();

LissonRouter.get("/", findAll);
LissonRouter.get("/seorch", findBySeorch);
LissonRouter.get("/:id", findOne);
LissonRouter.post("/", create);
LissonRouter.patch("/:id", update);
LissonRouter.delete("/:id", remove);

export default LissonRouter;

