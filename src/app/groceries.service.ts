import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { firstValueFrom } from 'rxjs';
import { Item } from './models/item';


@Injectable({
  providedIn: 'root'
})
export class GroceriesService {
  private apiUrl = environment.apiUrl;
  private cartItems: Item[] = [];

  constructor(private http: HttpClient) { }
  
  //Fetch fruits from the API
  getFruits(): Promise<Item[]>{
    // @ts-ignore
    return firstValueFrom(this.http.get(`${this.apiUrl}groceries?type=fruit`));
  }

  //Fetch fruits from the API
  getVegetables(): Promise<Item[]>{
    // @ts-ignore
    return firstValueFrom(this.http.get(`${this.apiUrl}groceries?type=vegetable`));
  }

  //Fetch all the grocery-items from the API
  getAllGroceryItems(): Promise<Item[]>{
    // @ts-ignore
    return firstValueFrom(this.http.get(`${this.apiUrl}groceries`));
  }

  /*CART */
  // Add item to cart
  addToCart(item: Item) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = { ...item, quantity: 1 };
      this.cartItems.push(newItem);
    }
  }

  // Get all items in the cart
  getCartItems(): Item[] {
    return this.cartItems;
  }

  // Clear all items from the cart
  clearCart() {
    this.cartItems = [];
  } 

  // groceries.service.ts

  removeFromCart(item: Item): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  // Filter items by type
  filterByType(type: string): Item[] {
  return this.cartItems.filter(item => item.type === type);
  }
}
