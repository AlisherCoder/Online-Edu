import { Router } from "express";
import {
   create,
   findAll,
   findBySeorch,
   findOne,
   pages,
   remove,
   update,
} from "../controllers/Comment.controller.js";

const CommentRouter = Router();

CommentRouter.get("/", findAll);

CommentRouter.get("/pages", pages);

CommentRouter.get("/search", findBySeorch);

CommentRouter.get("/:id", findOne);

CommentRouter.post("/", create);

CommentRouter.patch("/:id", update);

CommentRouter.delete("/:id", remove);

export default CommentRouter;
