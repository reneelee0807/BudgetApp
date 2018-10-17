import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Expense } from '../model/expense';
import { ExpenseService } from '../service/expense.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.component.html',
  styleUrls: ['./add-cost.component.css']
})
export class AddCostComponent implements OnInit {

  expense: Expense;

  private click = false;

  constructor(private router: Router, private expenseService: ExpenseService) { }

  onClick() {
    this.expenseService.addExpense(this.expense).toPromise().then(() => {
      this.router.navigate(['show-cost']);
    });
  }


  ngOnInit() {
    this.expense = new Expense('', '', '');
  }

}
