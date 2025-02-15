import {Request, Response} from 'express';

import { SigninUserService } from "../../Services/user/SigninUserService";


class SigninUserController{
    async handle(req:Request, res:Response){

    const signinUserService =  new SigninUserService(); 
    
    const {email, password} = req.body;
    const userData = await signinUserService.execute({email, password})

    return res.json(userData) 


    }
}

export {SigninUserController};