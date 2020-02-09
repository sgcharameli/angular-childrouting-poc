import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsPagePageRoutingModule } from './accounts-page-routing.module';

import { AccountsPagePage } from './accounts-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountsPagePageRoutingModule
  ],
  declarations: [AccountsPagePage]
})
export class AccountsPagePageModule {}
