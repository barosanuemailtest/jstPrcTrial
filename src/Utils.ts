import { parse, UrlWithParsedQuery } from 'url'

export class Utils {

    public static parseUrl(url: string): UrlWithParsedQuery {
        if (!url) {
            throw new Error('Empty url!');

        }
        const parsedUrl = parse(url, true);
        return parsedUrl;
    }

    public static toUpperCase(arg: string): string {
        return arg.toUpperCase();
    }

    public static toLowerCase(arg: string): string {
        return arg.toLowerCase();
    }
}