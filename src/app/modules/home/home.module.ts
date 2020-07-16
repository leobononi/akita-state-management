import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShoppingCartModule } from '../../modules/shopping-cart/shopping-cart.module';
import { MaterialModule } from 'src/app/core/layouts/material.module';

  @NgModule({
    imports: [
        HomeRoutingModule,
        FlexLayoutModule,
        ShoppingCartModule,
        MaterialModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
    ],
    providers: [
    ],
    entryComponents: []
  })
  export class HomeModule { }
  