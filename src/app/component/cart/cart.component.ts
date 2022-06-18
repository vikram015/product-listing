import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { Cart, SelectedItems } from "src/app/model/cart.model";
import { Product } from "src/app/model/product.model";
import { CartService } from "src/app/services/cart.service";


@Component({
    selector:'cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit{
    @Output() close = new EventEmitter()
    $cart!:Observable<Cart>
    constructor(private cartService:CartService){}
    ngOnInit(){
        this.$cart = this.cartService.$cart
    }

    increment(product:Product){
        this.cartService.addToCart(product,1)
    }
    decrement(product:Product){
        this.cartService.removeFromCart(product)
    }
    getSum(products:SelectedItems){
        return Object.keys(products).reduce((sum,k)=>{
            return sum + products[k].product.price * products[k].quantity;
        },0)
    }
}