import * as mongoose from 'mongoose';
import config from '../config/config';

class MongoDatabase{
    private _uri: string = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`;
    private _options: mongoose.ConnectionOptions = {
        socketTimeoutMS: config.mongo.timeoutSocket,
        connectTimeoutMS: config.mongo.timeoutConnection,
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true 
      };

    async connect(){
        try{
            await mongoose.connect(this._uri, this._options);
            console.log("CONECTADO AO MONGODB");
        }catch(err){
            console.log("ERRO AO CONECTAR AO MONGODB" + err);
        }
    }
}

export default new MongoDatabase();