import { EntityState, EntityStore, StoreConfig, ID, EntityUIStore } from '@datorama/akita';
import { ShoppingCartModel } from '../shopping-cart.model';
import { Injectable } from '@angular/core';

export interface ShoppingCartState extends EntityState<ShoppingCartModel> { 
  ui: {
    totalPrice: number;
  };
}

@StoreConfig({ name: 'shopping-cart' })
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartStore extends EntityStore<ShoppingCartState> {
  constructor() {
    super({
      ui: { totalPrice: 0}
    });
  }
}