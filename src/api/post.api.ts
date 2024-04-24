import { CONFIG } from "@/config";
import { HttpApi } from "@/lib/http/http";
import { ApiListResp, ApiResp } from "@/lib/http/type";
import { Category } from "./category.api";


export interface Tag {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    summary: string;
    content: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    category: Category;
    tags: Tag[];
}

export interface PostFilter {
    search?: string;
    category_id?: number;
}


export class PostApi {
    static async getPosts(): Promise<ApiListResp<Post>> {
        return HttpApi.get<ApiListResp<Post>>(`${CONFIG.API_URL}/posts`).then(({ data }) => data);
    }

    static async getPostBySlug(slug: string): Promise<ApiResp<Post>> {
        return HttpApi.get<ApiResp<Post>>(`${CONFIG.API_URL}/posts/${slug}`).then(({ data }) => data);
    }
}
