import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartModel } from '../shopping-cart.model';
import { ID } from '@datorama/akita';
import { ShoppingCartModule } from '../shopping-cart.module';

@Component({
  selector: 'shopping-cart-component',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
    @Input()
    dataSource: ShoppingCartModel[];

    @Input()
    totalPrice: number;

    @Input()
    activeRecord: ShoppingCartModel;

    @Output()
    onDelete: EventEmitter<ID> = new EventEmitter();

    @Output()
    onRowClick: EventEmitter<ID> = new EventEmitter();

    displayedColumns = ['id', 'description', 'price', 'action'];

    delete(itemId: ID){
      this.onDelete.emit(itemId);
    }

    rowClick(record: ShoppingCartModel){
      this.onRowClick.emit(record.id);
    }
}
