import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-user-acount',
  templateUrl: './complete-user-acount.component.html',
  styleUrls: ['./complete-user-acount.component.css']
})
export class CompleteUserAcountComponent implements OnInit {
  counter:number=0

  constructor() { }

  ngOnInit(): void {
  }

counterPlus(){
  this.counter++
}
counterMinus(){
  this.counter--

}

}
