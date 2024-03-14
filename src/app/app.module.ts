import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GroceriesService } from './groceries.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent, 
    GroceryListComponent, CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GroceriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
