import prismaClient from "../../prisma";

interface UserProps{
    user_id: string
    name: string,
    email: string
}


class UpdateUserService{
    async execute({user_id, name, email}: UserProps){

    try{
        const userExist = await prismaClient.user.findFirst({where: {
            id: user_id
        }})

        if(!userExist){
            throw new Error("Sorry, we could not find your account. ")
        }

        const updateInfo = await prismaClient.user.update({where: {
            id: user_id
        },
        data:{
            name: name,
            email: email
        },
        select: {
            id:true,
            name:true,
            email: true,
            endereco: true,
            subscriptions: {
                select:{
                    id: true,
                    status: true
                }
            }
        }

    })
    return updateInfo;


    }catch(err) {

    }



    }
}

export {UpdateUserService};