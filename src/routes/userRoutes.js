import { Router } from "express";

import * as userController from "../controllers/users";
import { userValidator } from "../validators/userValidator";

const router = Router();

router.get("/users", userController.fetchAll);
router.post("/signup", userValidator, userController.create);
router.post("/signin", userValidator, userController.userSignIn);

export default router;
