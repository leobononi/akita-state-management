import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavListComponent } from './layouts/sidenav-list/sidenav-list.component';
import { MaterialModule } from './layouts/material.module';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatSidenavModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SidenavListComponent,
    LayoutComponent
  ],
  exports: [
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CommonModule,
    MaterialModule,
    SidenavListComponent,
    LayoutComponent
  ],
  providers: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
