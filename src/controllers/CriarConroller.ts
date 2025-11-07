
import { type Request, type Response } from "express";
import { CriarService } from "../services/CriarService";

class CriarConroller{

    async handle(req:Request,res:Response){

        const {tarefa} = req.body as {tarefa:string}

        if(!tarefa){
            throw new Error("por precher")
        }

        const criarService = new CriarService()

        const respose = await criarService.excute({tarefa})

       await res.json(respose) 


    }
}

export {CriarConroller}
