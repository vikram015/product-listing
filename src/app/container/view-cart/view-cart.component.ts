import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Cart, SelectedItems } from "src/app/model/cart.model";
import { Product } from "src/app/model/product.model";
import { CartService } from "src/app/services/cart.service";

@Component({
    selector: 'view-cart',
    templateUrl: './view-cart.component.html'
})
export class ViewCartComponent implements OnInit {
    $cart!: Observable<Cart>
    constructor(private cartService: CartService,private router:Router) {

    }
    ngOnInit() {
        this.$cart = this.cartService.$cart
    }
    removeProduct(product:Product,remove = false){
        this.cartService.removeFromCart(product,remove)
    }
    addToCart(product:Product){
        this.cartService.addToCart(product,1)
    }
    getSum(products:SelectedItems){
        return Object.keys(products).reduce((sum,k)=>{
            return sum + products[k].product.price * products[k].quantity;
        },0)
    }
    checkOut(){
        this.router.navigate(['/manage-delivery-address'])
    }
}