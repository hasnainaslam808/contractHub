import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import{TemplateService} from '../template.service'
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  currentPage: any;
 
  tog: number = 0
  showCompanyDashboard: boolean = false
  constructor(private route: Router, private activeroute: ActivatedRoute, private service:TemplateService) {
    this.currentPage = this.activeroute.snapshot?.url[0]?.path;
    if(this.currentPage?.includes('company-dashboard')){
      this.showCompanyDashboard=true;
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
  console.log(this.tog);
  }
  sendData(tab:string){
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
}
