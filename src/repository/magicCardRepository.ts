import MagicCardModel from './../model/magicCardModel';
import MagicCardEntity from './../entity/magicCardEntity'

class MagicCardRepository{
    
    private _magicCardModel = MagicCardModel;
    private _excludedFields = { _id: false, __v: false };

    saveMagicCard(listMagicCard: Array<MagicCardEntity>){
        return new Promise((resolve, reject) =>{
            try{
                listMagicCard.forEach(magicCard => {
                    const magicCardModel = new this._magicCardModel({
                        id: magicCard.id,
                        name: magicCard.name,
                        rarity: magicCard.rarity
                    });
                    
                    magicCardModel.save();
                });
                resolve();
            }catch(err){
                reject(err);
            }
        });
    }

    findMagicCardById(id: string){
        return MagicCardModel.findOne({id}, this._excludedFields);
    }

    deleteMagicCardById(id: string){
        return MagicCardModel.deleteOne({id});
    }
}

export default new MagicCardRepository;