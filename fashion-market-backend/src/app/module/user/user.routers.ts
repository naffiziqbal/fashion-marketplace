import { Router } from "express";
import { middleware } from "../../middleware/jwt/jwtToken";
import { getUser } from "./user.controller";

const router = Router();

router.get("/", getUser);
router.post("/jwt", middleware.createToken);

export default router;
