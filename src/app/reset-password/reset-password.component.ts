import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
showNewPassword: boolean = false;
  constructor(private httpservice:HttpService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(formValue:any){
    this.httpservice.resetPassword(formValue).subscribe((res:any)=>{
      this.toastr.success("verification Email sent successfully")
     

    },(err:any)=>{
      this.toastr.error(err.error.Message)
    })
  }
}
