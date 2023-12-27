import { Component, OnInit } from '@angular/core';
import {TemplateService} from '../template.service'
@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
show=''
  constructor(private service:TemplateService) {
    this.service.activeData.subscribe(tab=>{
this.show=tab
    })
   }

  ngOnInit(): void {
  }

}
