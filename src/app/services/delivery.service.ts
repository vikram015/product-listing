import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DeliveryAddress } from "../model/delivery-address.model";


@Injectable({providedIn:'root'})
export class DeliveryService{
    
    apiUrl = environment.api_product
    constructor(private http:HttpClient,private oauthService:OAuthService){}
    getUserAddress(userId: string) {
        return <Observable<DeliveryAddress[]>>this.http.get(`${this.apiUrl}/api/user/${userId}/delivery/address`,{
            headers: new HttpHeaders().append("Authorization","Bearer "+this.oauthService.getAccessToken())
        })
    }
    addNewAddress(deliveryAddress: DeliveryAddress,userId: string){
        return this.http.post(`${this.apiUrl}/api/user/${userId}/delivery/address`,deliveryAddress,{
            headers: new HttpHeaders().append("Authorization","Bearer "+this.oauthService.getAccessToken())
        })
    }
    deleteAddress(address: DeliveryAddress) {
        return this.http.delete(`${this.apiUrl}/api/user/${address.userId}/delivery/address/${address.id}`,{
            headers: new HttpHeaders().append("Authorization","Bearer "+this.oauthService.getAccessToken())
        })
    }
}