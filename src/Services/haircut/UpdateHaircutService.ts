import prismaClient from '../../prisma';

interface HaircutRequest{
    user_id: string,
    haircut_id: string
    name:string,
    price:number
    status: boolean | string
}

class UpdateHaircutService{
    async execute({user_id, haircut_id, name, price, status}: HaircutRequest){

        //search for signature
        const user = await prismaClient.user.findFirst({
            where: {
                id:user_id,
            },
            select: {
                subscriptions: true
            }
        })

        if(user?.subscriptions?.status !== "active"){
            throw new Error("Unauthorized")
        }

        const updateHaircuts = await prismaClient.hairCut.update({where: {
            id: haircut_id
        },
        data: {
            name: name,
            price: price,
            status: status === "true" ? true : false
        }})

        return updateHaircuts;
        
    }
    }

export {UpdateHaircutService};