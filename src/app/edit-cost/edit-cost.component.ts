import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../model/expense';
import { ExpenseService } from '../service/expense.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-cost',
  templateUrl: './edit-cost.component.html',
  styleUrls: ['./edit-cost.component.css']
})

export class EditCostComponent implements OnInit {

  expense: Expense;

  constructor(private router: Router, private expenseService: ExpenseService) { }

  onClick() {
    this.expenseService.updateExpense(this.expense).toPromise().then(() => {
      this.router.navigate(['show-cost']);
    });
  }

  ngOnInit() {
    this.expense = new Expense('', '', '');
  }

  getTheExID(): string {
    console.log(localStorage.getItem("editExpenseID"));
    return localStorage.getItem("editExpenseID");    
  }
}
