import { CategoryListComponent } from "../component/category-list/category-list.component";

import { Category } from "./category.model";
import { Quantity } from "./quantity.model";

export interface Product{
    id?:string,
    name:string,
    description:string,
    category:Category,
    quantity: Quantity
    brandId:string,
    price: number,
    published: boolean,
    images:string[]
}