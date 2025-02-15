import prismaClient from "../../prisma";
import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'

interface UserProps{
    email:string,
    password: string
}

class SigninUserService{
    async execute({email, password}:UserProps){

        const user = await prismaClient.user.findFirst({where: {
            email: email,
    
        }, include: {
            subscriptions: true
        }})

        if(!user){
            throw new Error("Sorry, we could not find your account. ")
        }

        const passMatch = await compare(password, user?.password)
        
        if(!passMatch){
            throw new Error("Email/Password incorrect! ") 
        }

        const TOKEN = sign({
            name: user.name,
            email: user.email
        },
        process.env.JWT_TOKEN,{
            subject: user.id,
            expiresIn:'30d'
        }
    )


        return {
            id: user?.id,
            name:user.name,
            email:user.email,
            endereco:user?.endereco,
            token:TOKEN,
            sunscriptions: user.subscriptions ? {
                id: user?.subscriptions.id,
                status: user?.subscriptions.status
            } : null
        }

    }
}

export {SigninUserService};