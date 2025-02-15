import { Router, Request, Response } from "express";

import {CreateUserController} from './Controllers/user/createUserController';
import { SigninUserController } from "./Controllers/user/SigninUserControler";
import { DetailUserController } from "./Controllers/user/DetailsUserControler";

import { isAutheticated } from "./middlewares/isAutheticated";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json("RAIZ")
})

// -- USER ROUTES -- 
router.post("/users", new CreateUserController().handle)
router.post("/auth", new SigninUserController().handle)
router.get("/me",isAutheticated, new DetailUserController().handle)


export {router};