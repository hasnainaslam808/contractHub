import { Component, OnInit } from '@angular/core';
import {ElementRef,  ViewChild } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('pdfCanvas') pdfCanvas: ElementRef<HTMLCanvasElement> | undefined;
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
  this.loadPdf();

  }
 

  // Replace this URL with the actual URL of your PDF file
  pdfUrl = 'file:///D:/hasnainaslam245.pdf';

  



  loadPdf(): void {
    
    const canvasElement = this.pdfCanvas?.nativeElement;

    if (!canvasElement) {
      console.error('Canvas element is undefined.');
      return;
    }
  
    const context = canvasElement.getContext('2d');
  
    // Initialize PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js';

    // Load PDF document from URL
    pdfjsLib.getDocument(this.pdfUrl).promise.then((pdfDoc: { getPage: (arg0: number) => any; }) => {
      // Fetch the first page
      return pdfDoc.getPage(1);
    }).then((page: { getViewport: (arg0: { scale: number; }) => any; render: (arg0: { canvasContext: CanvasRenderingContext2D | null; viewport: any; }) => void; }) => {
      // Set up canvas
      const viewport = page.getViewport({ scale: 1.5 });
      canvasElement.width = viewport.width;
      canvasElement.height = viewport.height;

      // Render PDF page to canvas
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    }).catch((error: any) => {
      console.error('Error loading PDF:', error);
    });
  }
}
