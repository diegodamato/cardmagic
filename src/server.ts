import app from './app';
import config from './config/config'
import mongoDatabase from './database/mongoDatabase';

class Server{
    private _port: number = config.portServer;

    runServer = async() => {
        try{
            await mongoDatabase.connect();
            app.listen(this._port, () => {
                console.log(`Server running on port ${this._port}`);
            })
        }catch(err){
            console.log("ERRO " + err);
        }
    }
}

new Server().runServer();