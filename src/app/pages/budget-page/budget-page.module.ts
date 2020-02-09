import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetPagePageRoutingModule } from './budget-page-routing.module';

import { BudgetPagePage } from './budget-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetPagePageRoutingModule
  ],
  declarations: [BudgetPagePage]
})
export class BudgetPagePageModule {}
