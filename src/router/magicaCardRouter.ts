import { Router, Request, Response } from 'express';
import MagicCardCtrl from './../controller/magicCardCtrl';

const router: Router = Router();
const controller = new MagicCardCtrl()

router.post('/', controller.saveCard.bind(controller));

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

export default router;
