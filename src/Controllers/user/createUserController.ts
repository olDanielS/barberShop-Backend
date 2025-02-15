import e, {Request, Response} from 'express';
import { CreateUserService } from '../../Services/user/createUserService';

class CreateUserController{
    async handle(req:Request, res: Response){
        
        const createUserService = new CreateUserService();
        const {name, email, endereco, password} = req.body;

        const user = await createUserService.execute({name, email, password});

        return res.json(user)
    }
}

export {CreateUserController};