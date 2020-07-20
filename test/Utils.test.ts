import { Utils } from '../src/Utils';

describe.skip('Utils test suite', () => {

    it('parse simple URL correctly', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parsedUrl.host).toBe<Object>('localhost:8080');
        expect(parsedUrl.hostname).toBe('localhost');
        expect(parsedUrl.href).toBe('http://localhost:8080/login');
        expect(parsedUrl.path).toBe('/login');
        expect(parsedUrl.port).toBe('8080');
        expect(parsedUrl.protocol).toBe('http:');
        expect(parsedUrl.query).toEqual({});
    });
    test('parse url with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/empldetails?function=admin&wage=10');
        expect(parsedUrl.query).toEqual({
            function: 'admin',
            wage: '10'
        });
    });

    test('parse invalid url with wrapper function', () => {
        function zz() {
            Utils.parseUrl('')
        }
        expect(zz).toThrowError('Empty url!');
    });

    test('parse invalid url with wrapper  arrow function', () => {
        expect(() => {
            Utils.parseUrl('')
        }).toThrowError();
    });
})