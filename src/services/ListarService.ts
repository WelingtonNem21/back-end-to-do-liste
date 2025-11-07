import { prisma } from "../prisma"


// interface TarefasProps{
//     id: number
//     tarefa: string
// }

class ListarService{


    async excute(){



      const user = await prisma.lista.findMany()

        return user

    }
}

export {ListarService}