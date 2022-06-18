import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../model/product.model";
@Injectable({providedIn:'root'})
export class ProductService{
    apiUrl = environment.api_product
    constructor(private http:HttpClient){
        
    }
    getProducts(){
        return <Observable<Product[]>>this.http.get(`${this.apiUrl}/api/product`)
    }
    getProductDetail(productId:String){
        return <Observable<Product>> this.http.get(`${this.apiUrl}/api/product/${productId}`)
    }
}