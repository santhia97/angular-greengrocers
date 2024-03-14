import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceries: Item[] = [];

  constructor(private groceriesService: GroceriesService) {}

  ngOnInit(): void {
    this.fetchGroceries();
  }

  fetchGroceries() {
    this.groceriesService.getAllGroceryItems().then((data: Item[]) => {
      this.groceries = data;
    });
  }

  fetchFruits() {
    this.groceriesService.getFruits().then((data: Item[]) => {
      this.groceries = data;
    });
  }

  fetchVegetables() {
    this.groceriesService.getVegetables().then((data: Item[]) => {
      this.groceries = data;
    });
  }

  addToCart(item: Item) {
    this.groceriesService.addToCart(item);
    console.log(this.groceriesService.getCartItems());
  }


  removeFromCart(item: Item) {
    this.groceriesService.removeFromCart(item);
  }

}


