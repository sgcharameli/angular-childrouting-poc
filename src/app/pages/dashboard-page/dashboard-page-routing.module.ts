import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPagePage } from './dashboard-page.page';
import {BudComponent} from "../../components/bud/bud.component";
import {AccComponent} from "../../components/acc/acc.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardPagePage,
    children: [
      {
        path: 'budget',
        //loadChildren: () => import('../budget-page/budget-page.module').then( m => m.BudgetPagePageModule)
        component: BudComponent
      },
      {
        path: 'accounts',
        //loadChildren: () => import('../accounts-page/accounts-page.module').then( m => m.AccountsPagePageModule)
        component: AccComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPagePageRoutingModule {}
