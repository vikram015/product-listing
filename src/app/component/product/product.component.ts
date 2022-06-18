import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CartItem, SelectedItems } from "src/app/model/cart.model";
import { Product } from "src/app/model/product.model";

@Component({
    selector:'product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product!:Product
    @Input() selectedProducts?: SelectedItems
    @Output() productClick = new EventEmitter()
    @Output() add = new EventEmitter()
    @Output() remove = new EventEmitter()

    addProduct(event:any){
        this.add.emit({product: this.product,quantity:event.quantity || 1})
    }
    removeProduct(event:MouseEvent){
        this.remove.emit(this.product)
    }
}