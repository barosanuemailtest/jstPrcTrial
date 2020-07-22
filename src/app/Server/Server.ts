import { createServer, ServerResponse, IncomingMessage } from 'http';

export class Server {

    public startServer() {
        createServer(async (req, res) => {

        }).listen(8080);
    }
}