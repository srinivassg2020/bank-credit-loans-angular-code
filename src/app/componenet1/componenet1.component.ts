import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componenet1',
  templateUrl: './componenet1.component.html',
  styleUrls: ['./componenet1.component.css']
})
export class Componenet1Component implements OnInit {


    //empDetail !: FormGroup;
    customerDetail !: FormGroup;
    custObj : Customer = new Customer();
    customerList : Customer[] = [];

    constructor(private formBuilder : FormBuilder, private customerService : CustomerService) { }

    ngOnInit(): void {

      this.getAllCustomer();

      this.customerDetail = this.formBuilder.group({
        custId : [''],
        customerName : [''],
        email: [''],
        mobile: [''],
        address: ['']
      });

    }

    addCustomer() {
      console.log(this.customerDetail);
      //this.custObj.custId = this.customerDetail.value.custId;
      this.custObj.customerName = this.customerDetail.value.customerName;
      this.custObj.email = this.customerDetail.value.email;
      this.custObj.mobile = this.customerDetail.value.mobile;
      this.custObj.address = this.customerDetail.value.address;

      this.customerService.addCustomer(this.custObj).subscribe(res=>{
          console.log(res);
          this.getAllCustomer();
      },err=>{
          console.log(err);
      });

    }
    getAllCustomer() {
      this.customerService.getAllCustomer().subscribe(res=>{
          this.customerList = res;
      },err=>{
        console.log("error while fetching data.")
      });
    }

    editCustomer(cust : Customer) {
      //this.customerDetail.controls['id'].setValue(cust.custId);
      this.customerDetail.controls['name'].setValue(cust.customerName);
      this.customerDetail.controls['email'].setValue(cust.email);
      this.customerDetail.controls['mobile'].setValue(cust.mobile);
      this.customerDetail.controls['address'].setValue(cust.address);
    }

    updateCustomer() {

      //this.empObj.id = this.customerDetail.value.id;
      this.custObj.customerName = this.customerDetail.value.customerName;
      this.custObj.email = this.customerDetail.value.email;
      this.custObj.mobile = this.customerDetail.value.mobile;
      this.custObj.address = this.customerDetail.value.address;
      this.customerService.updateCustomer(this.custObj).subscribe(res=>{
        console.log(res);
        this.getAllCustomer();
      },err=>{
        console.log(err);
      })

    }

    deleteCustomer(cust : Customer) {

      this.customerService.deleteCustomer(cust).subscribe(res=>{
        console.log(res);
        alert('Customer deleted successfully');
        this.getAllCustomer();
      },err => {
        console.log(err);
      });

    }

}
