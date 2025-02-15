import prismaClient from "../../prisma"
import {hash} from 'bcrypt'

interface UserProps{
    name: string, 
    email: string,
    password: string
}

class CreateUserService{
    async execute({name, email,password}: UserProps){
        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExist = await prismaClient.user.findFirst({where:{
            email: email
        }})

        if(userAlreadyExist){
            throw new Error("User/Email already exist")
        }

        const encryptPassword = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: encryptPassword
            },
            select: {
                id:true,
                name:true,
                email:true,
                
            }
        })

        return user;
    }
}

export {CreateUserService};