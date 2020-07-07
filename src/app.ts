import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './router/magicaCardRouter'

class App{
    private _app: express.Application = express();
    
    start(){
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: false }));
        this._app.use(router);
        return this._app;
    }

}

export default new App().start();