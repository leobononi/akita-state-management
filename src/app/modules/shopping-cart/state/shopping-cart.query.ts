import { QueryEntity, EntityUIQuery } from '@datorama/akita';
import { ShoppingCartStore, ShoppingCartState} from './shopping-cart.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartQuery extends QueryEntity<ShoppingCartState> {
    all$ = this.selectAll();
    total$ = this.selectCount();
    active$ = this.selectActive(); /*explain after*/
    allRecords = this.getAll();
    totalRecords = this.getCount();

    constructor(protected store: ShoppingCartStore) {
        super(store);
    }
}