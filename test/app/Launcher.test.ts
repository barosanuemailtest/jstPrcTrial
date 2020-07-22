import { mocked } from 'ts-jest/utils';
import { Server } from '../../src/app/Server/Server';
import { Launcher } from '../../src/Launcher';

jest.mock('../../src/app/Server/Server', () => {
    return {
        Server: jest.fn(() => {
            return {
                startServer: () => {
                }
            }
        })
    }
});

describe('Launcher test suite', () => {
    const mockedServer = mocked(Server, true);

    test('launch app', () => {
        new Launcher();
        expect(mockedServer).toHaveBeenCalled();
    });

});