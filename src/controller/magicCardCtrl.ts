import { Request, Response } from 'express';
import MagicService from './../service/magicService';
import MagicCardEntity from './../entity/magicCardEntity'
import magicCardRepository from './../repository/magicCardRepository';

class MagicCard {
    private _magicService: MagicService = new MagicService();
    private _listMagicCard: Array<MagicCardEntity>;
    private _magicCardRepository = magicCardRepository

    async saveCard(req: Request, res: Response) {
        let name: string = req.body.name;

        try {
            this._listMagicCard = await this._magicService.getMagicCard(name);
            await this._magicCardRepository.saveMagicCard(this._listMagicCard);
            res.status(201).json({message: "Cadastrado com sucesso"})
        }catch(err){
            res.status(500).json({message: "Erro ao cadastrar " + err});
        }
    }

    async findCard(req: Request, res: Response){
        let id: string = req.params.id;

        try{
            const result = await this._magicCardRepository.findMagicCardById(id);
            result ? res.status(200).json(result) : res.status(404).json({});
        }catch(err){
            res.status(500).json({message: "Erro ao consultar " + err});
        }
    }

    async deleteCard(req: Request, res: Response){
        let id: string = req.params.id;

        try{
            await this._magicCardRepository.deleteMagicCardById(id);
            res.status(200).json({message: "Deletado com sucesso"});
        }catch(err){
            res.status(500).json({message: "Erro ao consultar " + err});
        }
        
    }
}

export default MagicCard;