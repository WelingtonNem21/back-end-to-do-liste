import { CriarConroller } from "./controllers/CriarConroller";
import { Router } from "express";
import { ListarConroller } from "./controllers/ListarController";
import { ExcluirController } from "./controllers/ExcluirController";
import { UpdateController } from "./controllers/UpdateController";

const routes = Router()


routes.post('/', new CriarConroller().handle)

routes.get('/', new ListarConroller().handle)

routes.delete('/', new ExcluirController().handle)

routes.put('/:id', new UpdateController().handle)


export {routes}