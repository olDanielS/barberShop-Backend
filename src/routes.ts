import { Router, Request, Response } from "express";

import {CreateUserController} from './Controllers/user/createUserController';
import { SigninUserController } from "./Controllers/user/SigninUserControler";
import { DetailUserController } from "./Controllers/user/DetailsUserControler";
import { UpdateUserController } from "./Controllers/user/UpdateUserController";

import { CreateHaircutController } from "./Controllers/haircut/CreateHaircutController";
import { ListHaircutController } from "./Controllers/haircut/ListHaircutController";
import { UpdateHaircutController } from "./Controllers/haircut/UpdateHaircutController";
import { CheckSubscriptionController } from "./Controllers/haircut/CheckSubscriptionController";

import { isAutheticated } from "./middlewares/isAutheticated";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json("RAIZ")
})

// -- USER ROUTES -- 
router.post("/users", new CreateUserController().handle)
router.put("/users",isAutheticated, new UpdateUserController().handle)
router.post("/auth", new SigninUserController().handle)
router.get("/me", isAutheticated, new DetailUserController().handle)

//HAIRCUT ROUTES
router.post("/haircut", isAutheticated, new CreateHaircutController().handle)
router.put("/haircut", isAutheticated, new UpdateHaircutController().handle)
router.get("/haircuts", isAutheticated, new ListHaircutController().handle)
router.get("/subscription", isAutheticated, new CheckSubscriptionController().handle)


export {router};