import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ItemOnSaleComponent } from './components/home/item-on-sale/item-on-sale.component';
import { ClothesComponent } from './components/home/type-of-clothes/clothes.component';
import { AboutComponent } from './components/home/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './components/shop/shop/shop.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ItemOnSaleComponent,
    ClothesComponent,
    AboutComponent,
    FooterComponent,
    ShopComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
