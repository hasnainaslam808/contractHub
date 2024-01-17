import { HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
  token=''
  constructor(private activeroute:ActivatedRoute,private httpservice:HttpService) {
    this.activeroute.params.subscribe((res:any) => {
      this.token=res.token;
    })
   }

  ngOnInit(): void {
  }
onSubmit(form:any){
this.httpservice.newPassword(form).subscribe((res:any) => {
  alert(res.message);
},(err:any) =>{
  alert(err.message);
})
}
}
