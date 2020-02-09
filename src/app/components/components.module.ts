import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccComponent} from "./acc/acc.component";
import {BudComponent} from "./bud/bud.component";

@NgModule({
  declarations: [
    AccComponent,
    BudComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
