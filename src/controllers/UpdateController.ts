
import { type Request, type Response } from "express";
import { UpdateService } from "../services/UpdateService";


class UpdateController{

    async handle(req:Request,res:Response){

        const {tarefa} = req.body as {tarefa:string}

        const id = req.params.id as string;

  
        const updateService = new UpdateService()

        const respose = updateService.execute({tarefa,id})


       await res.json(respose) 


    }
}

export {UpdateController}
