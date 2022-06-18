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
    AddDeliveryAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
