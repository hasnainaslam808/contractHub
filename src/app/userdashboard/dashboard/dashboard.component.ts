import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  documentUrl:any;

  
  error: any;
  page = 1;
  rotation = 0;
  zoom = 1.0;
  zoomScale: any = 'page-width';
  originalSize = false;
  pdf: any;
  renderText = true;
  progressData!: any;
  isLoaded = false;
  stickToPage = false;
  showAll = true;
  autoresize = true;
  fitToPage = false;
  outline!: any[];
  isOutlineShown = false;
  pdfQuery = '';
  mobile = false;

  constructor(private authservice: AuthService) {}

  uploadedFileUrl: string | null = null;

  ngOnInit() {
  this.documentUrl = `http://localhost:9090/${localStorage.getItem('docUrl')}`;
  console.log(this.documentUrl, 'this.documentUrl')

  }
}
