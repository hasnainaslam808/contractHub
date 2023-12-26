import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-company-acount',
  templateUrl: './create-company-acount.component.html',
  styleUrls: ['./create-company-acount.component.css']
})
export class CreateCompanyAcountComponent implements OnInit {



  constructor() { }

  counter:number=0;


  ngOnInit(): void {
  }
  counterPlus(){
    this.counter++
  }
  counterMinus(){
    this.counter--
  
  }

}
