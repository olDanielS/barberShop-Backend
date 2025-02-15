
import prismaClient from "../../prisma"

class CheckSubscriptionService{
    async execute(user_id: string){
    
        const checkSubscription = await prismaClient.user.findFirst({where: {
            id: user_id
        },
        select: {
            subscriptions: {
                select: {
                    id: true,
                    status: true
                }
            }
        }
    })
    return checkSubscription;
    }
}

export {CheckSubscriptionService};