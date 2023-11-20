import { Router } from "express";
import { middleware } from "../../middleware/jwt/jwtToken";
import { userController } from "./user.controller";

const router = Router();

router.get("/profile/:id", userController.getUser);
router.get("/all-users", userController.getAllUsers);
router.post("/create-user", userController.createUser);
router.post("/login", userController.userLogin);
router.post("/jwt", middleware.createToken);
router.post("/update-user/:id", userController.updateUserProfile);

export default router;
