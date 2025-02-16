import { Request, Response } from "express";
import { FinishScheduleService } from "../../../Services/haircut/schedule/FinishScheduleService";
class FinishScheduleController{
    async handle(req:Request, res:Response){

        const user_id = req.user_id;
        const schedule_id = req.query.schedule_id as string;
    
        const finishScheduleService = new FinishScheduleService();
        const finishSchedule = await finishScheduleService.execute({user_id, schedule_id})

        return res.json(finishSchedule)
    } 
}

export {FinishScheduleController};