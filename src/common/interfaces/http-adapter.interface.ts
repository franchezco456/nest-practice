


export interface httpAdapter{
    get<T>(url:string) : Promise<{data:T}>;
}