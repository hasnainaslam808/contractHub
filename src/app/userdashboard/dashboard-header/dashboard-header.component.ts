import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { TemplateService } from '../template.service'
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  currentPage: any;

  tog: number = 0
  showCompanyDashboard: boolean = false
  constructor(private route: Router, private activeroute: ActivatedRoute, private service: TemplateService, private authservice: AuthService, private httpservice: HttpService,private toastr:ToastrService) {
    this.currentPage = this.activeroute.snapshot?.url[0]?.path;
    if (this.currentPage?.includes('company-dashboard')) {
      this.showCompanyDashboard = true;
    }
    else if (this.currentPage?.includes('home')) {
      this.tog = 0

    } else {
      this.tog = 1

    }
  }
  togle() {
    this.tog = 1

  }
  ngOnInit(): void {

  }
  sendData(tab: string) {
    this.service.setactive(tab)
  }

  goBack() {

    this.route.navigate(["/user-dashboard"])
    this.tog = 0

  }

  companyDashboard() {
    this.showCompanyDashboard = true;
    console.log("companyDashboard");
  }
  personalDashboard() {
    this.showCompanyDashboard = false
  }



  logOut() {
    localStorage.removeItem('user-inn')
    this.route.navigate(['']);
    console.log("logOut");
  }


  // onFileChange(event: any) {
  //   const file = event.target.files[0];

  //   const fileUrl = 'https://example.com/' + file.name; 

  //   this.fileUploadService.uploadFile(fileUrl);
  // }

  //   onFileChange(e:any){
  //     if(e.target.files){
  //       upload
  //       console.log(e.target.files);
  //       var reader = new FileReader();
  //       var filrFormData= new FormData(e.target.files);
  //       console.log(filrFormData +"fileform")
  //       reader.readAsDataURL(e.target.files[0]);
  //       reader.onload=(event:any)=>{
  //         this.authservice.uploadFile(event.target.result);

  //       }

  //     }
  // }

  pdfUrl!:string;
  onFileChange(event: any): void {
    if (event.target.files) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfUrl = e.target.result
        localStorage.setItem('docUrl', e.target.result)
      };


      const formData = new FormData();
      formData.append('Document', file);
      localStorage.removeItem('docUrl');
      this.httpservice.postDocument(formData).subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success(response.message);
          localStorage.setItem('docUrl', response.url);
          //  const documentUrl=  response.url;
          //  console.log(documentUrl);
        },
        (error: any) => {
          this.toastr.error(error.message);
        }
      );
    }
  }
}