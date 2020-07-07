import MagicService from './../service/magicService';
import magicCardModel from './../model/magicCardModel';
import MagicCardCtrl from './../controller/magicCardCtrl';
import MagicCardRepository from './../repository/magicCardRepository';

class Factory{
    private _magicService : MagicService = new MagicService();
    private _magicCardRepository: MagicCardRepository = new MagicCardRepository(magicCardModel);
    private _magicCardCtrl: MagicCardCtrl = new MagicCardCtrl(this._magicService, this._magicCardRepository);

    get magicService(): MagicService{
        return this._magicService;
    }

    get magicCardRepository(): MagicCardRepository{
        return this._magicCardRepository;
    }

    get magicCardCtrl(): MagicCardCtrl{
        return this._magicCardCtrl;
    }
}

export default new Factory();