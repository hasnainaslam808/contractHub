import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-complete-user-acount',
  templateUrl: './complete-user-acount.component.html',
  styleUrls: ['./complete-user-acount.component.css']
})
export class CompleteUserAcountComponent implements OnInit {
  counter: number = 0
  seletedBtn: string = ''
  
  constructor(private httpservivce:HttpService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  timeValue(tab: string) {
    this.seletedBtn = tab
    console.log(this.seletedBtn)
  }
  onSubmit(form: any) {
    const selected={
      timeZone: this.seletedBtn,
      address: form

    }
    this.httpservivce.postAdress(selected).subscribe((res:any) => {
      this.toastr.success(res.Message);
      this.counterPlus()

    }, (err:any) => {
     this.toastr.success(err.error.Message);
    })
  }
  counterPlus() {
    this.counter++
  }
  counterMinus() {
    this.counter--

  }

}
