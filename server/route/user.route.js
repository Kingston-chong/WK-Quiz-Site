import express from "express";
import { createUser, deleteUser, updateUser, viewAllUser, viewUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/",createUser);
router.get("/",viewAllUser);
router.get("/:id",viewUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;