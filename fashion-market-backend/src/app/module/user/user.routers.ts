import { Router } from "express";
import { middleware } from "../../middleware/jwt/jwtToken";
import { userController } from "./user.controller";

const router = Router();

router.get("/profile", userController.getUser);
router.post("/create-user", userController.createUser);
router.post("/login", userController.userLogin);
router.post("/jwt", middleware.createToken);

export default router;
