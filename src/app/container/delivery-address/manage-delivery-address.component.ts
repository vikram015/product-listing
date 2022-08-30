import { Component, OnInit } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { DeliveryAddress } from "src/app/model/delivery-address.model";
import { CartService } from "src/app/services/cart.service";
import { DeliveryService } from "src/app/services/delivery.service";

@Component({
    selector: 'manage-delivery-address',
    templateUrl: './manage-delivery-address.component.html'
})
export class ManageDeliveryAddressController implements OnInit{
    $deliveryAddressess!: Observable<DeliveryAddress[]>
    selectedAddress?: DeliveryAddress
    createmode = false
    constructor(private deliveryService: DeliveryService,private cartService: CartService,private oauthService:OAuthService){
    
    }
    ngOnInit(){
        this.loadDeliveryAddress()
        this.cartService.$cart.subscribe(cart => this.selectedAddress = cart.address)
    }
    addDeliveryAddress(deliveryAddress:DeliveryAddress){
        this.deliveryService.addNewAddress(deliveryAddress,(<any>this.oauthService.getIdentityClaims()).sub)
        .subscribe(res =>{ 
            this.createmode = false
            this.loadDeliveryAddress()
        });
    }
    selectAddress(address:DeliveryAddress){
        this.cartService.updateDeliveryAddress(address)
    }
    deleteAddress(address:DeliveryAddress){
        this.deliveryService.deleteAddress(address)
        .subscribe(res => this.$deliveryAddressess = this.$deliveryAddressess.pipe(map(items => items.filter(item =>item.id != address.id))))
    }
    loadDeliveryAddress(){
        this.$deliveryAddressess = this.deliveryService.getUserAddress((<any>this.oauthService.getIdentityClaims()).sub)
    }
}