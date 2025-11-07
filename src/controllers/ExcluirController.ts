import { type Request, type Response } from "express";
import { ExcluirService } from "../services/ExcluirService";


class ExcluirController{

    async handle(req:Request,res:Response){

        const id = req.query.id as string

        const excluirService = new ExcluirService()

        const respose = await excluirService.execute({id})
        
        res.json({
            messagem: "excluindo"
        })
    }

}

export {ExcluirController}