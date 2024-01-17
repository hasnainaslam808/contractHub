import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-company-acount',
  templateUrl: './create-company-acount.component.html',
  styleUrls: ['./create-company-acount.component.css']
})
export class CreateCompanyAcountComponent implements OnInit {


activeButton=''
formValue:any;
legalName=''
email:any;
  constructor(private httpservice:HttpService) { }

  counter:number=0;


  ngOnInit(): void {
  }
  counterPlus(){
    this.counter++
  }
  counterMinus(){
    this.counter--
  
  }


  timeZone(tab: string){
this.activeButton = tab;
  }
  onSubmitAddress(formValue: any){
this.formValue = formValue;
  }
  onSubmitName(name: string){
    this.legalName=name;
  }
  onSubmitEmail(form:any){
this.email=form;
  }

  crateCompany(){
const colectData=[
]

// this.httpservice.createCompany()
// .subscribe(res)=>{

// }
  }
}
