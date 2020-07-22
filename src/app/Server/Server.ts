import { createServer, ServerResponse, IncomingMessage } from 'http';
import { Utils } from '../Utils';
import { LoginHandler } from '../Login/LoginHandler';

export class Server {

    private loginHandler: LoginHandler;

    public constructor(loginHandler: LoginHandler = new LoginHandler()) {
        this.loginHandler = loginHandler;
    }

    public startServer() {
        createServer(async (req, res) => {
            const basePath = Utils.getRequestBasePath(req);
            switch (basePath) {
                case 'login':
                    this.loginHandler.handleRequest();
                    break;

                default:
                    break;
            }
            res.end();
        }).listen(8080);
    }
}