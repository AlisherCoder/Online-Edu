import {Router} from "express";
import { create, findAll, findBySeorch, findOne, pages, remove, update } from "../controllers/Comment.controller.js";

const CommentRouter = Router();


/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Comment management endpoints
 */

/**
 * @swagger
 * /api/comment:
 *   get:
 *     summary: Get all Comment
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: All Comment
 *       401:
 *         description: Invalid request data
 */
CommentRouter.get("/", findAll);

/**
 * @swagger
 * /api/comment/pages:
 *   get:
 *     summary: Get on query parameters
 *     tags: [Comment]
  *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         limit: 10
 *         schema:
 *           type: integer
 *         description: 10
 *       - in: query
 *         offset: 3
 *         schema:
 *           type: integer
 *         description: 5
 *     responses:
 *       200:
 *         description: data
 *       404: 
 *         description: Not Fount
 *       401: 
 *         description: error
 */
CommentRouter.get("/pages", pages);


/**
 * @swagger
 * /api/comment/seorch:
 *   get:
 *     summary: Get on seorch parameters
 *     tags: [Comment]
  *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         optionla: "name"
 *         schema:
 *           type: integer || string
 *         description: "optionla"
 *     responses:
 *       200:
 *         description: data
 *       404: 
 *         description: Not Fount
 *       401: 
 *         description: error
 */
CommentRouter.get("/seorch", findBySeorch);


/**
 * @swagger
 * /api/comment/{id}:
 *   get:
 *     summary: Get one Comment
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Comment ID
 *     responses:
 *       200:
 *         description: data
 *       404:
 *         description: Not Fount
 *       401:
 *         description: error
 */
CommentRouter.get("/:id", findOne);



/**
 * @swagger
 * /api/comment:
 *   post:
 *     summary: creted
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *               - userId
 *               - courseId
 *               - star
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Zo'r"
 *               userId:
 *                 type: integer
 *                 example: 3
 *               courseId:
 *                 type: integer
 *                 example: 2
 *               star:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: data
 *       401:
 *         description: error
 *       500:
 *         description: deta baza error
 */
CommentRouter.post("/", create);


/**
 * @swagger
 * /api/comment:
 *   patch:
 *     summary: Update
 *     tags: [Comment]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *               - userId
 *               - courseId
 *               - star
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Yahshi"
 *               userId:
 *                 type: integer
 *                 example: 3
 *               courseId:
 *                 type: integer
 *                 example: 2
 *               star:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: data
 *       401:
 *         description: error
 */
CommentRouter.patch("/:id", update);


/**
 * @swagger
 * /api/comment/{id}:
 *   delete:
 *     summary: Get one Comment
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Comment ID
 *     responses:
 *       200:
 *         description: delete
 *       401:
 *         description: wrong delete error
 */
CommentRouter.delete("/:id", remove);

export default CommentRouter;

