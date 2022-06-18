import { Component, Input } from "@angular/core";
import { Category } from "src/app/model/category.model";

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent{
    @Input() categories!:Category[]
}