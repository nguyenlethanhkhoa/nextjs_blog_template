import { CONFIG } from "@/config";
import { HttpApi } from "@/lib/http/http";
import { ApiListResp } from "@/lib/http/type";


export interface Category {
    id: number;
    parent_id: string;
    name: string;
    slug: string;
    children: Category[];
}

export interface CategoryFilter {
    name?: string;
}


export class CategoryApi {
    static async getCategories(): Promise<ApiListResp<Category>> {
        return HttpApi.get<ApiListResp<Category>>(`${CONFIG.API_URL}/categories`).then(({ data }) => data);
    }
}
