import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../Services/haircut/CheckSubscriptionService";
class CheckSubscriptionController{
    async handle(req:Request, res:Response){

        const user_id = req.user_id;
    
        const checkSubscriptionService = new CheckSubscriptionService();
        const checkSub = await checkSubscriptionService.execute(user_id)

        return res.json(checkSub)
    } 
}

export {CheckSubscriptionController};