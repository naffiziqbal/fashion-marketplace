import { Router } from "express";
import { middleware } from "../../middleware/jwt/jwtToken";
import {  userController } from "./user.controller";

const router = Router();

router.get("/", userController.getUser);
router.post("/create-user", userController.createUser);
router.post("/jwt", middleware.createToken);

export default router;
