import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DeliveryAddress } from "src/app/model/delivery-address.model";


@Component({
    selector:'select-address',
    templateUrl: './select-delivery-address.component.html'
})
export class SelectDeliveryAddressComponent{
    @Input() addresses!: DeliveryAddress[]
    @Input() selectedAddress?: DeliveryAddress
    @Output() onSelect = new EventEmitter<DeliveryAddress>()
    @Output() onDelete = new EventEmitter<DeliveryAddress>()
}