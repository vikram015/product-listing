import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart } from "../model/cart.model";
import { DeliveryAddress } from "../model/delivery-address.model";
import { Product } from "../model/product.model";

@Injectable({providedIn:"root"})
export class CartService {
   
    private cart: Cart = {products:{},totalItem: 0}
    private _cart = new BehaviorSubject<Cart>(this.cart)
    $cart = this._cart.asObservable()
    constructor(private http:HttpClient){
        this.loadCart()
    }

    private loadCart(){
        const cartJson = localStorage.getItem("cart")
        if(cartJson){
            this.cart = JSON.parse(cartJson)
        }
        this._cart.next(this.cart)
    }
    updateDeliveryAddress(address: DeliveryAddress) {
        this.cart.address = address;
        this.publishAndSaveInLocalStore()
    }
    addToCart(product:Product,quantity:number){
        const currentEntry = this.cart.products[product.id!]
        if(currentEntry){
            this.cart.products[product.id!] = { ...currentEntry , quantity: currentEntry.quantity + quantity}
        } else {
            this.cart.totalItem++;
            this.cart.products[product.id!] = {product,quantity: quantity}
        }
        this.cart = {...this.cart}
        this.publishAndSaveInLocalStore()
    }
    removeFromCart(product:Product,removeFull = false){
        if(removeFull){
            delete this.cart.products[product.id!]
            this.cart.totalItem--;
            this.cart = {...this.cart}
            this.publishAndSaveInLocalStore()
            return;
        }
        const currentEntry = this.cart.products[product.id!]
        if(currentEntry){
            if(currentEntry.quantity == 1){
                delete this.cart.products[product.id!]
                this.cart.totalItem--;
            } else {
                this.cart.products[product.id!] = { ...currentEntry , quantity: currentEntry.quantity - 1}
            }
        }
        this.cart = {...this.cart}
        this.publishAndSaveInLocalStore()
    }
    private publishAndSaveInLocalStore(){
        localStorage.setItem("cart",JSON.stringify(this.cart))
        this._cart.next(this.cart)
    }
}