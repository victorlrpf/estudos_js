import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Esse não deveria existir se fosse um em prod mesmo
router.get('/', loginRequired, UserController.index);
router.get('/:id', UserController.show);

// Esses são realistas  para o projeto final
router.post('/', loginRequired, UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
Index => lista todos os usuarios => GET
store/create => cria usuarios =>  POST
show => mostra os usuarios => GET
update => atualiza dados do usuario =>PATCH ou PUT
delete => apaga um usuario => DELETE
*/
