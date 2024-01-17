import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private httpService:HttpService,private router:Router,private toastr:ToastrService,) { }
 

  ngOnInit(): void {
   
    
  }

  onSubmit(formValue:any){
   
    this.httpService.login(formValue).subscribe((res:any)=>{
      this.toastr.success("Successfully logged in")
    console.log(res);
    localStorage.setItem('user-inn', res.Token);
    // this.toaster.showSuccess('login successfully');
    this.router.navigate(['user-account']);
    }
    , (err) =>{
     
      this.toastr.error(err.error.Message)
    })
  }
}
