import { Server } from '../../../src/app/Server/Server';
import * as http from 'http';

const end = jest.fn()
jest.mock('http', () => ({
  createServer:  (cb: any) => {
    cb({ url: '/readme' }, { end })

    return {
      listen: jest.fn()
    }
  }
}));

describe('Server', () => {

    it('should create server on port 8080', () => {
        const server = new Server().startServer();
    });
});