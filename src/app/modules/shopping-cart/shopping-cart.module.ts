import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ShoppingCartPage } from './pages/shopping-cart.page';
import { ShoppingCartComponent } from './components/shopping-cart.component';
import { ShoppingCartFormComponent } from './components/form/shopping-cart-form.component';
import { ShoppingCartService } from './state/shopping-cart.service';
import { ShoppingCartStore } from './state/shopping-cart.store';
import { ShoppingCartQuery } from './state/shopping-cart.query';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/core/layouts/material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

  @NgModule({
    imports: [
      CommonModule,
      FlexLayoutModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule      
    ],
    exports: [
      ShoppingCartPage
    ],
    declarations: [
      ShoppingCartPage,
      ShoppingCartComponent,
      ShoppingCartFormComponent
    ],
    providers:[
      // ShoppingCartService,
      // ShoppingCartStore,
      // ShoppingCartQuery
    ],
    entryComponents: []
  })
  
  export class ShoppingCartModule { }