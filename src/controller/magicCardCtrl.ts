import { Request, Response } from 'express';
import MagicService from './../service/magicService';
import MagicCardEntity from '../entity/magicCardEntity';

class MagicCard {
    private _magicService: MagicService = new MagicService();
    private _listMagicCard: object;

    async saveCard(req: Request, res: Response) {
        let name: string = req.body.name;

        try {
            this._listMagicCard = await this._magicService.getMagicCard(name);
            // TODO salvar no mongo
        }catch(err){
            console.log("OCORREU UM ERRO " + err);
        }

        res.send(this._listMagicCard);

    } 
}

export default MagicCard;