import verifyToken from "../middlewares/verifyToken.js";
import rolePolice from "../middlewares/rolePolice.js";
import { Router } from "express";
import {
   login,
   register,
   resetPassword,
   sendOTP,
   verify,
} from "../controllers/auth.controller.js";
import {
   findAll,
   findOne,
   remove,
   update,
} from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.post("/verify", verify);
userRoute.post("/send-otp", sendOTP);
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.post("/resetPassword", resetPassword);

userRoute.get("/", verifyToken, rolePolice(["admin"]), findAll);
userRoute.get("/:id", verifyToken, rolePolice(["admin"]), findOne);
userRoute.delete("/:id", verifyToken, rolePolice(["admin"]), remove);
userRoute.patch("/:id", verifyToken, rolePolice(["admin"]), update);

export default userRoute;
