import prismaClient from "../../../prisma";

class ListScheduleService{
    async execute(user_id: string){
    
    const schedules = await prismaClient.service.findMany({
        where: {
            userId: user_id
        },
        select: {
            id: true,
            costomer: true,
            haircut: true
        }
    })

    return schedules;

    }
}

export {ListScheduleService};