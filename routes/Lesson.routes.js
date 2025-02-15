import {Router} from "express";
import { create, findAll, findBySeorch, findOne, pages, remove, update } from "../controllers/Lesson.controller.js";

const LissonRouter = Router();


/**
 * @swagger
 * tags:
 *   name: Lesson
 *   description: Lesson management endpoints
 */

/**
 * @swagger
 * /api/lesson:
 *   get:
 *     summary: Get all Lesson
 *     tags: [Lesson]
 *     responses:
 *       200:
 *         description: data
 *       401:
 *         description: error
 */
LissonRouter.get("/", findAll);


/**
 * @swagger
 * /api/lesson/pages:
 *   get:
 *     summary: Get on query parameters
 *     tags: [Lesson]
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
LissonRouter.get("/pages", pages);


/**
 * @swagger
 * /api/lesson/seorch:
 *   get:
 *     summary: Get on seorch parameters
 *     tags: [Lesson]
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
LissonRouter.get("/seorch", findBySeorch);


/**
 * @swagger
 * /api/lesson/{id}:
 *   get:
 *     summary: Get one Lesson
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lesson ID
 *     responses:
 *       200:
 *         description: data
 *       404:
 *         description: Not Fount
 *       401:
 *         description: error
 */
LissonRouter.get("/:id", findOne);


/**
 * @swagger
 * /api/lesson:
 *   post:
 *     summary: creted
 *     tags: [Lesson]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - link
 *               - description
 *               - courseId
 *             properties:
 *               link:
 *                 type: string
 *                 example: "https://www.youtube.com/watch?v=MOsTpgKIGT4"
 *               description:
 *                 type: string
 *                 example: "Bu kurs haqida malumod"
 *               courseId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: data
 *       401:
 *         description: error
 *       500:
 *         description: deta baza error
 */
LissonRouter.post("/", create);


/**
 * @swagger
 * /api/lesson:
 *   patch:
 *     summary: creted
 *     tags: [Lesson]
 *     requestBody:
 *       required: optional
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - link
 *               - description
 *               - courseId
 *             properties:
 *               link:
 *                 type: string
 *                 example: "https://www.youtube.com/watch?v=MOsTpgKIGT4"
 *               description:
 *                 type: string
 *                 example: "Bu kurs haqida malumod"
 *               courseId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: data
 *       401:
 *         description: error
 *       500:
 *         description: deta baza error
 */
LissonRouter.patch("/:id", update);


/**
 * @swagger
 * /api/lesson/{id}:
 *   delete:
 *     summary: Get one Lesson
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lesson ID
 *     responses:
 *       200:
 *         description: delete
 *       401:
 *         description: wrong delete error
 */
LissonRouter.delete("/:id", remove);

export default LissonRouter;

