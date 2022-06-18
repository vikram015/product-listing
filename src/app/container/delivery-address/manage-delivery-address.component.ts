import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DeliveryAddress } from "src/app/model/delivery-address.model";
import { DeliveryService } from "src/app/services/delivery.service";

@Component({
    selector: 'manage-delivery-address',
    templateUrl: './manage-delivery-address.component.html'
})
export class ManageDeliveryAddressController implements OnInit{
    $deliveryAddressess!: Observable<DeliveryAddress[]>
    constructor(private deliveryService: DeliveryService){}
    ngOnInit(){
        this.$deliveryAddressess = this.deliveryService.getUserAddress("NOID")
    }
    addDeliveryAddress(deliveryAddress:DeliveryAddress){
        console.log("adding address",deliveryAddress)
        this.deliveryService.addNewAddress(deliveryAddress,'vikram')
        .subscribe(res => console.log(res));
    }
}