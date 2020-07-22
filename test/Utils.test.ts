import { Utils } from '../src/app/Utils';

describe('Utils test suite', () => {

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

    test('getRequestBasePath - valid request', () => {
        const someRequest = {
            url: 'http://localhost:8080/login'
        } as any;
        const requestBasePath = Utils.getRequestBasePath(someRequest);
        expect(requestBasePath).toBe('login');
    });

    test('getRequestBasePath - no pathname request', () => {
        const someRequest = {
            url: 'http://localhost:8080/'
        } as any;
        const requestBasePath = Utils.getRequestBasePath(someRequest);
        expect(requestBasePath).toBe('');
    });

    test('getRequestBasePath - no url valid request', () => {
        const someRequest = {
        } as any;
        const requestBasePath = Utils.getRequestBasePath(someRequest);
        expect(requestBasePath).toBe('');
    });
})