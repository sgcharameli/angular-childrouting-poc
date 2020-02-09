import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsPagePage } from './accounts-page.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsPagePageRoutingModule {}
