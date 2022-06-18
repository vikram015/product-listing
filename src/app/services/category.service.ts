import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Category } from "../model/category.model";

@Injectable({providedIn:"root"})
export class CategoryService{
    apiUrl = environment.api_product
    constructor(private http:HttpClient){}
    getCategories(){
        return <Observable<Category[]>> this.http.get(`${this.apiUrl}/api/category`)
    }
}