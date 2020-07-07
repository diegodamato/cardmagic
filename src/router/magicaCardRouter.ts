import { Router, Request, Response } from 'express';
import MagicCardCtrl from './../controller/magicCardCtrl';

const router: Router = Router();
const controller = new MagicCardCtrl()

router.post('/', controller.saveCard.bind(controller));
router.get('/:id', controller.findCard.bind(controller));
router.delete('/:id', controller.deleteCard.bind(controller));

export default router;
