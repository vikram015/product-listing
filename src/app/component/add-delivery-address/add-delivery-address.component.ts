import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'add-delivery-address',
    templateUrl: './add-delivery-address.component.html'
})
export class AddDeliveryAddressComponent implements OnInit{
    deliveryAddressForm!: FormGroup
    @Output() save = new EventEmitter()
    constructor(private fb: FormBuilder){}

    ngOnInit(){
        this.deliveryAddressForm = this.fb.group({
            firstName: ['',Validators.required],
            lastName: ['',Validators.required ],
            contactNumber: ['',Validators.required],
            houseNumber: ['',Validators.required],
            apartmentName: [],
            streetAddress: [],
            landMark: [],
            cityName: [],
            areaDetails: ['',Validators.required],
            pinCode: ['',Validators.required],
            addressType: ['home',Validators.required]
        })
    }
}