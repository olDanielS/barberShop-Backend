import { Request, Response } from "express";
import { CreateHaircutService } from "../../Services/haircut/CreateHaircutService";

class CreateHaircutController{
    async handle(req:Request, res:Response){

        const user_id = req.user_id;
        const {name, price} = req.body;
        
        const createHaircutService = new CreateHaircutService();

        const createHaircut = await createHaircutService.execute({user_id, name, price})

        return res.json(createHaircut)
    } 
}

export {CreateHaircutController};