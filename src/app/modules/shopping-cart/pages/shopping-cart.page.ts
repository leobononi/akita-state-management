import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ShoppingCartService } from '../state/shopping-cart.service';
import { ShoppingCartQuery } from '../state/shopping-cart.query';
import { ID } from '@datorama/akita';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ShoppingCartModel } from '../shopping-cart.model';
import { ShoppingCartFormComponent } from '../components/form/shopping-cart-form.component';

@Component({
  selector: 'shopping-cart-page',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartPage implements OnInit {
  totalPrice = 0;
  constructor(
    public service: ShoppingCartService, 
    public query: ShoppingCartQuery,
    public cd: ChangeDetectorRef) {}

    @ViewChild('panelForm') formExpansionPanel: MatExpansionPanel;
    
    @ViewChild(ShoppingCartFormComponent)
    private shoppingCartFormComponent: ShoppingCartFormComponent;

    panelState = true;

    ngOnInit(): void {
      this.service.chargeStore();

      this.query.all$.subscribe(result => {
        if (result)
          this.totalPrice = result.reduce(this.sumTotalPrices(), 0);
      });
    };

    deleteItem(itemId: ID){
      this.service.deleteRecord(itemId);
    }

    addItem(){
      if(this.formExpansionPanel.expanded){
        if (!this.shoppingCartFormComponent.isValidForm())
          return;

        this.formExpansionPanel.close();
      } else {
        this.formExpansionPanel.open();
        let record = {
          id : Math.random() as ID,
          number: this.query.getCount() + 1
        } as ShoppingCartModel;
        this.service.addRecord(record);
        this.shoppingCartFormComponent.resetFormValues();
      }
    }

    updateRecord(record: ShoppingCartModel){
      const activeRecord = this.query.getActive() as ShoppingCartModel;
      this.service.updateRecord(activeRecord.id, Object.assign({price: record.price, description: record.description}));
    }

    resetPanel(){
      this.formExpansionPanel.close();
      let activeRecord = this.query.getActive() as ShoppingCartModel;
      this.service.resetActive(activeRecord.id);
    }

    setActiveRecord(id: ID){
      this.service.setActive(id);
      this.formExpansionPanel.open();
      this.shoppingCartFormComponent.setFormValues(this.query.getActive() as ShoppingCartModel);
    }

    private sumTotalPrices(): (previousValue: number, currentValue: ShoppingCartModel, currentIndex: number, array: ShoppingCartModel[]) => number {
      return (a, b) => {
        if (b.price)
          return a + b.price;
  
        return a;
      };
    }
}
