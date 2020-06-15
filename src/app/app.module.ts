import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BurgerComponent } from './components/burgerBuilder/burger/burger.component';
import { BurgerIngredientComponent } from './components/burgerBuilder/burger/burgerIngredient/burger-ingredient.component';
import { ControlsComponent } from './components/burgerBuilder/controls/controls.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderSummaryComponent } from './components/orders/summary/order-summary.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/list/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerComponent,
    BurgerIngredientComponent,
    ControlsComponent,
    OrderSummaryComponent,
    OrdersComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
