import ApiHelper from "@/utils/ApiHelper";
import { httpQuery } from "@/utils/httpUtils";

class ArticleService {
    private static instance: ArticleService;
    private baseUrl: string = ApiHelper.article;
    static getInstance(): ArticleService {
        ArticleService.instance = ArticleService.instance ?? new ArticleService();
        return ArticleService.instance;
    }
//     async get(id?: number): Promise<any> {
//         let url = `${this.baseUrl}/${id}`;
//         let res = await httpQuery("get", url);
//         return res;
//     }
//     async getList(amount = 999): Promise<any[]> {
//         let url = `${this.baseUrl}?batchSize=${amount}`;
//         return await httpQuery("get", url);
//     }
}
export default ArticleService.getInstance();
