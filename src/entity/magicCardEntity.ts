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

    get id(): string{
        return this._id;
    }

    get name(): string{
        return this._name;
    }

    get rarity(): string{
        return this._rarity;
    }

}

export default MagicCardEntity;