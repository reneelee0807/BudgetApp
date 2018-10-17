import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../model/expense';
import { Observable } from 'rxjs';

@Injectable()
export class ExpenseService {
  constructor(private http: HttpClient) { }
  private baseUrl: string = 'https://kjtw4fzc20.execute-api.ap-southeast-2.amazonaws.com/app/expensetable';

  addExpense(expense: Expense) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post(this.baseUrl, expense, options);
  }

  getExpense() {
    let expenses = [];
    return this.http.get(this.baseUrl) 
  }


  deleteExpense(exID: string) {
    return this.http.delete(this.baseUrl + '/' + exID);
  }

  getExpenseByID(exID: string) {
    return this.http.get<Expense>(this.baseUrl + '/' + exID);
  }

  updateExpense(expense: Expense) {
    return this.http.put(this.baseUrl + '/' + expense.exID, expense);
  }
}
