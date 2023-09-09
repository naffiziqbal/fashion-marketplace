import { Router } from "express";
import { createToken, getUser } from "./user.controller";
import { middleware } from "../../middleware/verifyToken";

const router = Router();

router.get("/", getUser);
router.post("/jwt", createToken);

export default router;
