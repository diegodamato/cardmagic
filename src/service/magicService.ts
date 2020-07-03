import * as Magic from 'mtgsdk-ts'
import MagicCardEntity from './../entity/magicCardEntity'

class MagicService{
    private _language: string = "Portuguese (Brazil)";
    
    getMagicCard(name: string){
        return new Promise<MagicCardEntity[]>(async(resolve, reject) => {
            try{
                let totalCard: Array<Magic.Card> = await Magic.Cards.where({name: name, language: this._language});
                let cards: Array<MagicCardEntity> = [];
                
                totalCard.forEach(card => {
                    cards.push(new MagicCardEntity(card.name, card.rarity))
                });
                
                resolve(cards);
            }catch(err){
                reject(err);
            }
       });
    }
}

export default MagicService;