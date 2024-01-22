import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChangeDetectionStrategy,  } from '@angular/core';
import {  IPDFViewerApplication, NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { PageRenderEvent } from 'ngx-extended-pdf-viewer/lib/events/page-render-event';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  documentUrl:any;


  pdfUrl=''

  uploadedFileUrl: string | null = null;

  ngOnInit() {
  this.documentUrl = `http://localhost:9090/${localStorage.getItem('docUrl')}`;
  console.log(this.documentUrl, "this document url")
  console.log(this.documentUrl, 'this.documentUrl')

  }







}
