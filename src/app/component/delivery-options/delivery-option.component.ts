import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CartItem } from "src/app/model/cart.model";
import { Product } from "src/app/model/product.model";

@Component({
    selector:'delivery-options',
    templateUrl:'./delivery-option.component.html'
})
export class DeliveryOptions{
    @Input() product!: Product
    @Input() selectedProduct?: CartItem
    @Output() add = new EventEmitter()
    @Output() remove = new EventEmitter();
}