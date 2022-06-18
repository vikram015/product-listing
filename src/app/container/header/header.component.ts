import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    totalCartItem = 0
    constructor(private cartService:CartService){}
    ngOnInit(){
        this.cartService.$cart.subscribe(cart => this.totalCartItem = cart.totalItem)
    }
}