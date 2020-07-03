import MongoConfig from './mongoConfig';

class Config{
    private _portServer: number = Number(process.env.PORT) || 3000
    private _mongo: MongoConfig = new MongoConfig ();

    get portServer(): number{
        return this._portServer;
    }

    get mongo(): MongoConfig {
        return this._mongo;
    }
    
}

export default new Config();