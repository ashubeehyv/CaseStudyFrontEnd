import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductServiceService } from 'services/product-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    SidebarComponent,
    ProductDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
