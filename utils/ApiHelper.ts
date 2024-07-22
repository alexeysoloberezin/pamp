class ApiHelper {
    private urls = {
        local: "http://localhost:6600",
        external: "https://pampadu.ru",
    };

    file = this.urls.external + "/api" + "/file";
    article = this.apiUrl + "/article";
    get url() {
        if (process.env.NODE_ENV != "production") return this.urls.local;
        return this.urls.external;
    }
    get apiUrl() {
        return this.url + "/api";
    }

    origin = process.env.NODE_ENV === 'production' ? 'https://pampadu.ru' : 'http://site.pampadu.ru'


  combineUrl(part: string, api: boolean = true): string {
        return `${api ? this.apiUrl : this.url}${part}`;
    }
    combineFileUrl(query: string): string {
        return `${this.apiUrl}/file/content?fileName=${query}`;
    }
}

export default new ApiHelper();
