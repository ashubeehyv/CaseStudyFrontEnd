import { importProvidersFrom, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ProductServiceService } from 'services/product-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule} from '@angular/material/slider'
import { LoginService } from 'services/login.service';
import { AuthGuard } from 'services/auth.guard';
import { AuthInterceptor } from 'services/auth.interceptor';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    SidebarComponent,
    ProductDashboardComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
  ],
  providers: [ProductServiceService, LoginService, AuthGuard,[{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }


