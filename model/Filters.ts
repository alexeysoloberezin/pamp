export interface IGridResult<T> {
    items: T[];
    itemsNumber: number;
}

export interface IDefaultFilter {
    pageNumber?: number;
    pageSize?: number;
    isAscSort?: boolean;
    sortField?: string;
}

export interface ITableFilter {
    page: number
    sortBy: string
    descending?: boolean
    rowsPerPage: number
}