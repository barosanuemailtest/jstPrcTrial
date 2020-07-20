import { Server } from './app/Server/Server';

export class Launcher {

    private server: Server;

    public constructor() {
        this.server = new Server();
    }

    public launchApp() {
        this.server.createServer();
    }

}

new Launcher().launchApp();