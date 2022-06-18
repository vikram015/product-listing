import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DeliveryAddress } from "../model/delivery-address.model";


@Injectable({providedIn:'root'})
export class DeliveryService{
    apiUrl = environment.api_product
    constructor(private http:HttpClient){}
    getUserAddress(userId: string) {
        return <Observable<DeliveryAddress[]>>this.http.get(`${this.apiUrl}/api/user/${userId}/delivery/address`)
    }
    addNewAddress(deliveryAddress: DeliveryAddress,userId: string){
        return this.http.post(`${this.apiUrl}/api/user/${userId}/delivery/address`,deliveryAddress)
    }

}