import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { GroceriesService } from '../groceries.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: Item[] = [];

  constructor(private groceriesService: GroceriesService){}

  ngOnInit(): void {
    this.cartItems = this.groceriesService.getCartItems();
  }

  increaseQuantity(item: Item): void{
    item.quantity++;
  }

  decreaseQuantity(item: Item): void {
    if (item.quantity === 1) {
      this.removeItem(item);
    } else if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: Item): void {
    this.groceriesService.removeFromCart(item);
    this.cartItems = this.groceriesService.getCartItems();
  }

  getTotalPrice(): number {
    const totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    return parseFloat(totalPrice.toFixed(2));  
  }

}
