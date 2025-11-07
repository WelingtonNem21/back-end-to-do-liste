
import { type Request, type Response } from "express";
import { ListarService } from "../services/ListarService";


class ListarConroller{

    async handle(req:Request,res:Response){


        const listarService = new ListarService()
 
        const respose = await listarService.excute()

        await res.json(respose)

    }
}

export {ListarConroller}
