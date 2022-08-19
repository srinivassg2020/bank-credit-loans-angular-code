import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/service/loan.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componenet2',
  templateUrl: './componenet2.component.html',
  styleUrls: ['./componenet2.component.css']
})
export class Componenet2Component implements OnInit {

  LoanFormDetail !: FormGroup;
  loanObj : Loan = new Loan();
  loanList : Loan[] = [];

  constructor(private formBuilder : FormBuilder, private loanService : LoanService) { }

  ngOnInit() {
    this.getAllLoan();

      this.LoanFormDetail = this.formBuilder.group({
        loanId : [''],
        customerId : [''],
        loanType : [''],
        currency : [''],
        loanAmount : [''],
        loanPendingAmount : [''],
        interestRate : [''],
        totalInstalments : [''],
        remainingInstalments : [''],
        loanStartDate : [''],
        loanEndDate : ['']
      });
  }

  addLoan() {
    console.log(this.LoanFormDetail);
    this.loanObj.loanId = this.LoanFormDetail.value.loanId;
    this.loanObj.customerId = this.LoanFormDetail.value.customerId;
    this.loanObj.loanType = this.LoanFormDetail.value.loanType;
    this.loanObj.currency = this.LoanFormDetail.value.currency;
    this.loanObj.loanAmount = this.LoanFormDetail.value.loanAmount;
    this.loanObj.loanPendingAmount = this.LoanFormDetail.value.loanPendingAmount;
    this.loanObj.interestRate = this.LoanFormDetail.value.interestRate;
    this.loanObj.totalInstalments = this.LoanFormDetail.value.totalInstalments;
    this.loanObj.remainingInstalments = this.LoanFormDetail.value.remainingInstalments;
    this.loanObj.loanStartDate = this.LoanFormDetail.value.loanStartDate;
    this.loanObj.loanEndDate = this.LoanFormDetail.value.loanEndDate;

    this.loanService.addLoan(this.loanObj).subscribe(res=>{
        console.log(res);
        this.getAllLoan();
    },err=>{
        console.log(err);
    });

  }
  getAllLoan() {
    this.loanService.getAllLoans().subscribe(res=>{
        this.loanList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editLoan(loan : Loan) {
    //this.customerDetail.controls['id'].setValue(cust.custId);
    this.LoanFormDetail.controls['currency'].setValue(loan.currency);
    this.LoanFormDetail.controls['loanPendingAmount'].setValue(loan.loanPendingAmount);
    this.LoanFormDetail.controls['interestRate'].setValue(loan.interestRate);
    this.LoanFormDetail.controls['totalInstalments'].setValue(loan.totalInstalments);
    this.LoanFormDetail.controls['remainingInstalments'].setValue(loan.remainingInstalments);
    this.LoanFormDetail.controls['loanStartDate'].setValue(loan.loanStartDate);
    this.LoanFormDetail.controls['loanEndDate'].setValue(loan.loanEndDate);
  }

  updateLoan() {

    this.loanObj.currency = this.LoanFormDetail.value.currency;
    this.loanObj.loanPendingAmount = this.LoanFormDetail.value.loanPendingAmount;
    this.loanObj.interestRate = this.LoanFormDetail.value.interestRate;
    this.loanObj.totalInstalments = this.LoanFormDetail.value.totalInstalments;
    this.loanObj.remainingInstalments = this.LoanFormDetail.value.remainingInstalments;
    this.loanObj.loanStartDate = this.LoanFormDetail.value.loanStartDate;
    this.loanObj.loanEndDate = this.LoanFormDetail.value.loanEndDate;

    this.loanService.updateLoan(this.loanObj).subscribe(res=>{
      console.log(res);
      this.getAllLoan();
    },err=>{
      console.log(err);
    })

  }

  deleteLoan(loan : Loan) {

    this.loanService.deleteLoan(loan).subscribe(res=>{
      console.log(res);
      alert('Loans deleted successfully');
      this.getAllLoan();
    },err => {
      console.log(err);
    });

  }
  getLoanDetails(loan : Loan) {

    this.loanService.getAllLoans().subscribe(res=>{
      console.log(res);
      alert('loanId loanType loanAmount loanInstalmentAmount');
      this.getAllLoan();
    },err => {
      console.log(err);
    });

  }
  detailLoan(loan : Loan) {

    this.loanService.getAllLoans().subscribe(res=>{
      console.log(res);
      alert('loanId loanType loanAmount loanInstalmentAmount');
      this.getAllLoan();
    },err => {
      console.log(err);
    });

  }

}
