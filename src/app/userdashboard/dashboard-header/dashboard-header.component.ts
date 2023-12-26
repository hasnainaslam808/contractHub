import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  currentPage: any;
  showCompanyDashboard: boolean = false
  tog: number = 0

  constructor(private route: Router, private activeroute: ActivatedRoute) {
    this.currentPage = this.activeroute.snapshot?.url[0]?.path;
    if (this.currentPage?.includes('home')) {
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
 
 
  goBack() {

    this.route.navigate(["/user-dashboard"])
    this.tog = 0

  }

  companyDashboard() {
    this.showCompanyDashboard = true
  }
  personalDashboard() {
    this.showCompanyDashboard = false
  }
}
