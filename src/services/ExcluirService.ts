import { prisma } from "../prisma"

interface ExcluirProps{
    id: string
}

class ExcluirService{

    async execute({id}:ExcluirProps){

       if (!id) {
         throw new Error("O campo 'id' é obrigatório.");
        }

        const respose = await prisma.lista.delete({
            where:{
                id: Number(id)
            }
        })

        return respose

    }

}

export {ExcluirService}