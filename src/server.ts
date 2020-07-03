import app from './app';
import config from './config/config'

const port: number = config.portServer;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})