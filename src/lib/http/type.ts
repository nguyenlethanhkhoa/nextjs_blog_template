interface Resp {
    status: number;
    message: 'success' | 'failure';
}

export interface ApiResp<T> extends Resp {
    result: T;
}

export interface ListResp<T> {
    items: T[];
    total: number;
}

export interface ApiListResp<T> extends Resp {
    result: ListResp<T>
}