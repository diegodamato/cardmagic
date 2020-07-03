import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './router/magicaCardRouter'
import mongoDatabase from './database/mongoDatabase';

const app: express.Application = express();
mongoDatabase.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

export default app;