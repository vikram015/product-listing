import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SelectedItems } from "src/app/model/cart.model";
import { Product } from "src/app/model/product.model";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    @Input() selectedProducts?: SelectedItems
    @Input() products!:Product[]
    @Output() productClick = new EventEmitter()
    @Output() add = new EventEmitter()
    @Output() remove = new EventEmitter()
}

