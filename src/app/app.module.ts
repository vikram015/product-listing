import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './component/product/product.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { HeaderComponent } from './container/header/header.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { DeliveryOptions } from './component/delivery-options/delivery-option.component';
import { ViewCartComponent } from './container/view-cart/view-cart.component';
import { AddRemoveButtonCommponent } from './component/add-remove-button/add-remove-button.component';
import { ManageDeliveryAddressController } from './container/delivery-address/manage-delivery-address.component';
import { AddDeliveryAddressComponent } from './component/add-delivery-address/add-delivery-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectDeliveryAddressComponent } from './component/select-delivery-address/select-delivery-address.component';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';
import { LoginProcessingComponent } from './component/login-processing/login.processing.component';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://localhost:8015',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/login-processing',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'ui',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile',

  showDebugInformation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CategoryComponent,
    CategoryListComponent,
    DashboardComponent,
    HeaderComponent,
    ProductDetailComponent,
    CartComponent,
    DeliveryOptions,
    ViewCartComponent,
    AddRemoveButtonCommponent,
    ManageDeliveryAddressController,
    AddDeliveryAddressComponent,
    SelectDeliveryAddressComponent,
    LoginProcessingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
