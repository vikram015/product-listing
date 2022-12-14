import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginProcessingComponent } from './component/login-processing/login.processing.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { ManageDeliveryAddressController } from './container/delivery-address/manage-delivery-address.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ViewCartComponent } from './container/view-cart/view-cart.component';
import { AuthGuardWithForcedLogin } from './guard/auth.guard-with-force-login';

const routes: Routes = [
  { path:'',redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product/:productId', component: ProductDetailComponent},
  { path: 'view-cart', component: ViewCartComponent},
  { path: 'login-processing', component: LoginProcessingComponent},
  { path: 'manage-delivery-address', component: ManageDeliveryAddressController, canActivate:[AuthGuardWithForcedLogin] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardWithForcedLogin]
})
export class AppRoutingModule { }
