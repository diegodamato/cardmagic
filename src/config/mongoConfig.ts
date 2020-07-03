class MongoConfig{
    private _host: string = process.env.MONGO_HOST || 'localhost';
    private _port: number = Number(process.env.MONGO_PORT) || 27017;
    private _database: string = process.env.MONGO_DATABASE || 'magicCard'
    private _timeoutSocket: number = Number(process.env.MONGO_TIMEOUT_SOCKET) || 30000;
    private _timeoutConnection: number = Number(process.env.MONGO_TIMEOUT_CONNECTION) || 30000;
    
    get host(): string{
        return this._host;
    }

    get port(): number{
        return this._port;
    }

    get database(): string{
        return this._database;
    }

    get timeoutSocket(): number{
        return this._timeoutSocket;
    }

    get timeoutConnection(): number{
        return this._timeoutConnection;
    }

}

export default MongoConfig;