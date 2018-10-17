import { Component, OnInit } from '@angular/core';
import { Expense } from '../model/expense';
import { Income } from '../model/income';
import { ExpenseService } from '../service/expense.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-show-cost',
  templateUrl: './show-cost.component.html',
  styleUrls: ['./show-cost.component.css']
})
export class ShowCostComponent implements OnInit {

  public incomes = [
    { source: 'salary', money: 2000 }
  ];
  public money = 2000;
  public expenses = [];
  
  constructor(
    private router: Router,
    private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getAllExpense();
  }

  private getAllExpense() {
    const comp = this;
    this.expenseService.getExpense().toPromise().then(function (result: any) {
      result.forEach(function (value, key) {
        let expense = new Expense(value.exID, value.exItem, value.cost);
        comp.expenses.push(expense);
      });
    });
  }

  calCost(): number {
    let costs = 0;
    this.expenses.forEach(function (value, key) {
      costs += parseInt(value.cost);
    });
    return costs;
  }

  calculate(): number {
    return this.money - this.calCost();
  }

  deleteExpense(exID: string) {
    this.expenseService.deleteExpense(exID).subscribe(() => {
      window.location.reload();
    });
  }
  editExpense(exID: string) {
    this.expenseService.getExpenseByID(exID).subscribe(() => {
      localStorage.setItem("editExpenseID", exID, );
      this.router.navigate(['edit-cost']);
    });

  }

}
