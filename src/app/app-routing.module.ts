import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BurgerComponent } from './components/burgerBuilder/burger/burger.component';
import { OrdersComponent } from './components/orders/list/orders.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: BurgerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
