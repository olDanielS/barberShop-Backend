import prismaClient from "../../../prisma";

interface ScheduleProps{
    user_id: string,
    schedule_id: string
}


class FinishScheduleService{
    async execute({user_id, schedule_id}: ScheduleProps){

        if(!user_id || !schedule_id){
            throw new Error("ERROR")
        }

        try{

            const BelongToUser = await prismaClient.service.findFirst({where: {
                id: schedule_id,
                userId: user_id
            }})

            if(!BelongToUser){
                throw new Error("Not authorized")
            }

            await prismaClient.service.delete({where: {
                id: schedule_id
            }})

            return {message: "Schedule finished"}



        }catch(err){

        }

    }
}

export {FinishScheduleService};