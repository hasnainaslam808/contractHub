import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  // standalone: true,
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],

})
export class GetStartedComponent implements OnInit {

  constructor(private httpService:HttpService,private router:Router,private toastr:ToastrService) { }
 

  ngOnInit(): void {
  }

  onSubmit(formValue:any){
    // console.log(formValue);
    this.httpService.signup(formValue).subscribe((res:any)=>{
      this.toastr.success("Data Submitted Successfully")
this.router.navigate(['/login']);
    }
    , (err:any) =>{
      this.toastr.error(err.error.Message);

    })
  }
}
// http://localhost:4200/verify/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTliZmQwZjRlNWFhYjQ3N2M4MDBjOTQiLCJpYXQiOjE3MDQ3MjE2NzksImV4cCI6MTcwNDcyNTI3OX0.ojp6M3gxu1jC7qcxchVcYny8ULy_WkIit8UK2XLxvR4
