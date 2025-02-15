import { Router, Request, Response } from "express";

import {CreateUserController} from './Controllers/user/createUserController';
import { SigninUserControler } from "./Controllers/user/SigninUserControler";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json("RAIZ")
})

// -- USER ROUTES -- 
router.post("/users", new CreateUserController().handle)
router.post("/auth", new SigninUserControler().handle)

export {router};