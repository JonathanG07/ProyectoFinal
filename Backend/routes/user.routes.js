import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser, login, uploadAvatar} from "../controllers/user.controller.js";
import { validator } from "../middleware/validator.js";
import upload from "../middleware/upload.js";

export const userRouter = Router();

//routes
//CRUD
//GET all users
userRouter.get("/", getUsers);

//GET user by id
userRouter.get("/:id", getUser);

//CREATE user
userRouter.post("/", validator, createUser);
userRouter.post("/login", login);
userRouter.post("/avatar", upload.single('avatar'), uploadAvatar);


//UPDATE user by id
userRouter.patch("/:id", validator, updateUser);

//delete user by id
userRouter.delete("/:id", deleteUser);
