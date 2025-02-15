
import prismaClient from "../../prisma"

interface HaircutProps{
    user_id: string,
    name: string,
    price: number
}

class CreateHaircutService{
    async execute({user_id, name, price}: HaircutProps){
    
        if(!name || !price){
            throw new Error("Arguments insufficients.")
        }

        const myHaircuts = await prismaClient.hairCut.count({
            where: {
                userId: user_id
            }
        })

        const user = await prismaClient.user.findFirst({where: {
            id: user_id
        },
        select: {
            subscriptions: true
        }
    })
    if(myHaircuts >= 3 && user?.subscriptions?.status !== "active"){
        throw new Error("Faz a assinatura ai chefe.")
    }


        const haircut = await prismaClient.hairCut.create({data: {
            userId: user_id,
            name: name,
            price: price
        }})
    
        return {haircut};
    }
}

export {CreateHaircutService};