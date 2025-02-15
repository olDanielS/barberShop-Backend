import {Request, Response} from 'express';
import { ListHaircutService } from '../../Services/haircut/ListHaircutService';

class ListHaircutController{
    async handle(req:Request, res:Response){

    const user_id = req.user_id;
    const status = req.query.status as string;
    
    const detailUserService = new ListHaircutService();
    const datails = await detailUserService.execute({user_id, status})

    return res.json(datails)

    }

}

export {ListHaircutController};