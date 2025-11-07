import { prisma } from "../prisma";

interface TarefasProps {
  tarefa: string;
  id: string;
}

class UpdateService {
  async execute({ tarefa, id }: TarefasProps) {

    if (!tarefa) {
      throw new Error("Por favor, informe a tarefa.");
    }

    if (!id) {
         throw new Error("O campo 'id' é obrigatório.");
     }


    const response = await prisma.lista.update({
      where: {
        id: Number(id), 
      },
      data: {
        tarefa,
      },
    });

    return response;
  }
}

export { UpdateService };
