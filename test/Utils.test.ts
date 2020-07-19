import { Utils } from '../src/Utils';

describe('Utils test suite', () => {

    it('parse simple URL correctly', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
        //    expect(parsedUrl.host).toBe('localhost:8080');
    })
})