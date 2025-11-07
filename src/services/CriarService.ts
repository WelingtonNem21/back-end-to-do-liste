import { prisma } from "../prisma"


interface TarefasProps{
    tarefa: string
}

class CriarService{


    async excute({tarefa}:TarefasProps){

    if (!tarefa) {
        throw new Error("Por favor, informe a tarefa.");
    }

      const user = await prisma.lista.create({
            data: {
                tarefa: tarefa,
            }
        })

        return user

    }
}

export {CriarService}