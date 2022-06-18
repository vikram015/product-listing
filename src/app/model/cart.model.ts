import { Product } from "./product.model";

export interface Cart{
    products: SelectedItems,
    totalItem: number
    id?:string,
    userId?:string,
}
export interface CartItem{
    product: Product,
    quantity: number
}
export interface SelectedItems{
    [key: string]: CartItem
}