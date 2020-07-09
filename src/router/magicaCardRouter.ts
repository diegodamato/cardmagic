import { Router, Request, Response } from 'express';
import factory from './../factory/factory';

const router: Router = Router();
const controller = factory.magicCardCtrl;

router.post('/', controller.saveCard.bind(controller));
router.get('/', controller.findAllCard.bind(controller));
router.get('/:id', controller.findCard.bind(controller));
router.delete('/:id', controller.deleteCard.bind(controller));

export default router;
