import { Request, Response } from "express";

import { UpdateUserService } from "../../Services/user/UpdateUserService";

class UpdateUserController{
    async handle(req: Request, res:Response){

        const user_id = req.user_id;
        const {name, email} = req.body;

        const updateUserService = new UpdateUserService();
        
        const update = await updateUserService.execute({user_id, name, email})

        return res.json(update)
    }
}

export {UpdateUserController}