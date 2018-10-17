import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCostComponent } from './add-cost/add-cost.component';
import { ShowCostComponent } from './show-cost/show-cost.component';
import { EditCostComponent } from './edit-cost/edit-cost.component';

export const routes: Routes = [
  { path: '', component: ShowCostComponent },
  { path: 'add-cost', component: AddCostComponent },
  { path: 'show-cost', component: ShowCostComponent},
  { path: 'edit-cost', component: EditCostComponent }, 
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
