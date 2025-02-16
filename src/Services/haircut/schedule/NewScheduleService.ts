import prismaClient from "../../../prisma";

interface ScheduleProps{
    user_id: string,
    haircut_id: string,
    customer: string
}


class NewScheduleService{
    async execute({user_id, haircut_id, customer}: ScheduleProps){

        if(!haircut_id || !customer){
            throw new Error("Arguments insufficients")
        }

        const schedule = await prismaClient.service.create({
            data: {
                userId: user_id,
                costomer: customer,
                haircut_id: haircut_id
            }
        })

        return schedule;

    }
}

export {NewScheduleService};