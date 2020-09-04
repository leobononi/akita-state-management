import { Injectable } from '@angular/core';
import { ShoppingCartStore } from './shopping-cart.store';
import { ShoppingCartModel } from '../shopping-cart.model';
import { ID } from '@datorama/akita';
import { ShoppingCartModule } from '../shopping-cart.module';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  
  constructor(
    public store: ShoppingCartStore
  ) {  }

  async chargeStore() { 
    this.store.setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 5000));
    const items: ShoppingCartModel[] = [
        {id: 1, description: "Item1 description here", number: 1, price: 110.34},
        {id: 2, description: "Item2 description here", number: 2, price: 664.90},
        {id: 3, description: "Item3 description here", number: 3, price: 12.30},
        {id: 4, description: "Item4 description here", number: 4, price: 5540.12}
    ];
    this.store.set(items);
  }

  deleteRecord(itemId: ID) {
    //api call for deleting the record
    //on 200 result
    //Perform akita change (remove)
    this.store.remove(itemId);
  }

  addRecord(record: ShoppingCartModel){
    //make api call
    //on that result we perform akita store change
    this.store.add(record);
    this.store.setActive(record.id);
  }

  updateRecord(id: ID, record: ShoppingCartModel){
    let isInvalid = record.description && record.description.length > 30
    this.store.setError(isInvalid);
    this.store.update(id, record);
  }

  resetActive(id: ID){
    this.store.setActive('')
  }

  setActive(id: ID){
    this.store.setActive(id);
  }

  setEditMode(){
    this.store.update({ui: {isEditing: true}});
  }

  setAddMode(){
    this.store.update({ui: {isEditing: false}});
  }
}