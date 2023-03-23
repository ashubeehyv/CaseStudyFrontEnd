import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'services/auth.guard';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'',
    component:ProductDashboardComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'order',
    component:OrderComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent,SignupComponent]