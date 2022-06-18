import { Component, Input } from "@angular/core";
import { Category } from "src/app/model/category.model";

@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CategoryComponent{
    @Input() category!:Category
}