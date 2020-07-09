import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './router/magicaCardRouter';
import Cors from './midlleware/cors';

class App{
    private _app: express.Application = express();
    
    start(){
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: false }));
        this._app.use(Cors.intercept);
        this._app.use(router);
        return this._app;
    }

}

export default new App().start();