import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  addLoanURL : string;
  getLoanURL : string;
  getLoanByIdURL : string;
  updateLoanUrl : string;
  deleteLoanUrl : string;

  constructor(private http : HttpClient) {
    this.addLoanURL = 'http://localhost:9191/addLoan';
    this.getLoanURL = 'http://localhost:9191/loans';
    this.getLoanByIdURL = 'http://localhost:9191/loan/{id}';
    this.updateLoanUrl = 'http://localhost:9191/update';
    this.deleteLoanUrl = 'http://localhost:9191/deleteLoan/{id}';
  }

  addLoan(loan : Loan): Observable<Loan> {
    return this.http.post<Loan>(this.addLoanURL,loan);
  }

  getAllLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.getLoanURL);
  }

  updateLoan(loan :Loan) : Observable<Loan>{
    return this.http.put<Loan>(this.updateLoanUrl, loan);
  }

  deleteLoan(loan : Loan) : Observable<Loan> {
    return this.http.delete<Loan>(this.deleteLoanUrl+'/'+loan.loanId);
  }


}
