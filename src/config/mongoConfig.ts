class MongoConfig{
    private _uri: string = process.env.MONGO_URI;
    private _timeoutSocket: number = Number(process.env.MONGO_TIMEOUT_SOCKET);
    private _timeoutConnection: number = Number(process.env.MONGO_TIMEOUT_CONNECTION);
    
    get uri(): string{
        return this._uri;
    }

    get timeoutSocket(): number{
        return this._timeoutSocket;
    }

    get timeoutConnection(): number{
        return this._timeoutConnection;
    }

}

export default MongoConfig;