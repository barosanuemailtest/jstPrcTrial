import { Server } from '../../../src/app/Server/Server';
import * as http from 'http';



describe('Server test suite', () => {

    function fakeCreateServer() {
        return {}
    }

    test('start server', () => {
        const serverSpy = jest.spyOn(http, 'createServer').mockImplementation(fakeCreateServer);
        const server = new Server().startServer();
        expect(serverSpy).toBeCalled();

    });

});