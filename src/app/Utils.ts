import { parse, UrlWithParsedQuery } from 'url'
import { IncomingMessage } from 'http';

export class Utils {

    public static parseUrl(url: string): UrlWithParsedQuery {
        if (!url) {
            throw new Error('Empty url!');

        }
        const parsedUrl = parse(url, true);
        return parsedUrl;
    }

    public static getRequestBasePath(req: IncomingMessage): string {
        const url = req.url;
        if (url) {
            const parsedUrl = this.parseUrl(url);
            if (parsedUrl.pathname) {
                return parsedUrl.pathname.split('/')[1];
            } else {
                return ''
            }
        } else {
            return '';
        }
    }

    public static toUpperCase(arg: string): string {
        return arg.toUpperCase();
    }

    public static toLowerCase(arg: string): string {
        return arg.toLowerCase();
    }
}