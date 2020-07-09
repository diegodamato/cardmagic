import { Request, Response } from 'express';
import MagicService from './../service/magicService';
import MagicCardEntity from './../entity/magicCardEntity'
import MagicCardRepository from './../repository/magicCardRepository';

class MagicCardCtrl {
    private _magicService: MagicService;
    private _listMagicCard: Array<MagicCardEntity>;
    private _magicCardRepository: MagicCardRepository;

    constructor(magicService: MagicService, magicCardRepository: MagicCardRepository){
        this._magicService = magicService;
        this._magicCardRepository = magicCardRepository;
    }

    async saveCard(req: Request, res: Response) {
        let name: string = req.body.name;

        try {
            this._listMagicCard = await this._magicService.getMagicCard(name);
            const result = await this._magicCardRepository.saveMagicCard(this._listMagicCard);
            res.status(201).json(this._listMagicCard)
        }catch(err){
            res.status(500).json({message: "Erro ao cadastrar " + err});
        }
    }

    async findAllCard(req: Request, res: Response){
        try{
            const result = await this._magicCardRepository.findAllMagicCard();
            result ? res.status(200).json(result) : res.status(404).json({});
        }catch(err){
            res.status(500).json({message: "Erro ao consultar " + err});
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
            const result = await this._magicCardRepository.deleteMagicCardById(id);
            result.deletedCount ? res.status(200).json({message: "Deletado com sucesso"}) : res.status(404).json({});
        }catch(err){
            res.status(500).json({message: "Erro ao consultar " + err});
        }
        
    }
}

export default MagicCardCtrl;