import { mocked } from 'ts-jest/utils';
import { Server } from '../../src/app/Server/Server';
import { Launcher } from '../../src/Launcher';

jest.mock('../../src/app/Server/Server', () => {
    return {
        Server: jest.fn(() => {
            return {
                createServer: () => {
                    console.log('mocked createServerImpl')
                }
            }
        })
    }
});

describe('Launcher test suite', () => {
    let launcher: Launcher;
    const mockedServer = mocked(Server, true);

    test('launch app', () => {
        launcher = new Launcher();
        expect(mockedServer).toHaveBeenCalled();
    });

});