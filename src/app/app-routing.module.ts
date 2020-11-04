import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop/shop.component';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'shop', 
    component: ShopComponent
  }, 
  {
    path: 'login', 
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
