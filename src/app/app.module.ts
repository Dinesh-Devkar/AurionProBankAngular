import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthUserService } from './home/services/auth-user.service';
import { TokenIntercepterService } from './home/services/token-intercepter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NgbModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenIntercepterService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
