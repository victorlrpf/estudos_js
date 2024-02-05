import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

/*
Index => lista todos os usuarios => GET
store/create => cria usuarios =>  POST
show => mostra os usuarios => GET
update => atualiza dados do usuario =>PATCH ou PUT
delete => apaga um usuario => DELETE
*/
