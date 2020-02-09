import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetPagePage } from './budget-page.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetPagePageRoutingModule {}
