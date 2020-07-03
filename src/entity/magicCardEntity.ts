import { uuid } from 'uuidv4';

class MagicCardEntity{
    private _id: string;
    private _name: string;
    private _rarity: string;

    constructor(name: string, rarity: string){
        this._id = uuid();
        this._name = name;
        this._rarity = rarity;
    }
}

export default MagicCardEntity;