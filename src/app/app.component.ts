import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaseStudyFrontEnd';

  constructor(private router: Router) {
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
  



}
