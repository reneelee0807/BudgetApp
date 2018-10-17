import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AddCostComponent } from './add-cost/add-cost.component';
import { EditCostComponent } from './edit-cost/edit-cost.component';
import { ShowCostComponent } from './show-cost/show-cost.component';
import { AppRouterModule } from './app-router.module';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from './service/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    AddCostComponent,
    EditCostComponent,
    ShowCostComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
