import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  addCustURL : string;
  getCustURL : string;
  updateCustUrl : string;
  deleteCustUrl : string;

  constructor(private http : HttpClient) {
    this.addCustURL = 'http://localhost:9191/addCustomer';
    this.getCustURL = 'http://localhost:9191/customers';
    this.updateCustUrl = 'http://localhost:9191/update';
    this.deleteCustUrl = 'http://localhost:9191/delete/{id}';
   }
   addCustomer(cust : Customer): Observable<Customer> {
    return this.http.post<Customer>(this.addCustURL,cust);
  }

  getAllCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.getCustURL);
  }

  updateCustomer(cust :Customer) : Observable<Customer>{
    return this.http.put<Customer>(this.updateCustUrl, cust);
  }

  deleteCustomer(cust : Customer) : Observable<Customer> {
    return this.http.delete<Customer>(this.deleteCustUrl+'/'+cust.custId);
  }
}
