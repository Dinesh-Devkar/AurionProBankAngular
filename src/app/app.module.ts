import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthUserService } from './home/services/auth-user.service';
import { TokenIntercepterService } from './home/services/token-intercepter.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenIntercepterService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
