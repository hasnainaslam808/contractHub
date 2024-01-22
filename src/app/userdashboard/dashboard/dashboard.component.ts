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

  
  error: any;
  // page = 1;
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

 

  uploadedFileUrl: string | null = null;

  ngOnInit() {
  this.documentUrl = `http://localhost:9090/${localStorage.getItem('docUrl')}`;
  console.log(this.documentUrl, "this document url")
  console.log(this.documentUrl, 'this.documentUrl')

  }










  // tslint:disable-next-line: variable-name
  public _selectedTab = 0;

  public page = 5;

  public pageLabel!: string;

  public showPdfViewer = true;

  public height: string = 'auto';

  public time = 0;
  public currentTime = 0;

  private startTime = new Date().getTime();
  private currentStartTime = new Date().getTime();

  /** This attribute is only used on browser without localStorage (e.g. Brave on iOS) */
  private themeIfLocalStorageIsUnavailable = 'light';

 

  private _fullscreen = false;

  public get fullscreen(): boolean {
    return this._fullscreen;
  }

  public set fullscreen(full: boolean) {
    this._fullscreen = full;
    setTimeout(() => this.pdfService.recalculateSize());
  }

  public localStorageIsSupported() {
    try {
      if (localStorage) {
        return true;
      }
    } catch (safariSecurityException) {
      // localStorage is not available on Safari
    }
    return false;
  }

  public set selectedTab(index: number) {
    try {
      if (localStorage) {
        localStorage.setItem('ngx-extended-pdf-viewer.simple.selectedTab', String(index));
      }
    } catch (safariSecurityException) {
      // localStorage is not available on Safari
    }
  }

  public get selectedTab(): number {
    try {
      if (localStorage) {
        return Number(localStorage.getItem('ngx-extended-pdf-viewer.simple.selectedTab')) || 0;
      }
    } catch (safariSecurityException) {
      // localStorage is not available on Safari
    }
    return 0;
  }

  public set theme(theme: string) {
    try {
      if (theme !== this.theme && localStorage) {
        localStorage.setItem('ngx-extended-pdf-viewer.theme', theme);
        location = location;
      } else {
        this.themeIfLocalStorageIsUnavailable = theme;
        location = location;
      }
    } catch (safariSecurityException) {
      // localStorage is not available on Safari
      this.themeIfLocalStorageIsUnavailable = theme;
      location = location;
    }
  }

  public get theme(): string {
    try {
      if (localStorage) {
        return localStorage.getItem('ngx-extended-pdf-viewer.theme') || 'light';
      } else {
        return this.themeIfLocalStorageIsUnavailable;
      }
    } catch (safariSecurityException) {
      // localStorage is not available on Safari
      return this.themeIfLocalStorageIsUnavailable;
    }
  }

  constructor(private pdfService: NgxExtendedPdfViewerService,private authservice: AuthService) {
    this.startTime = new Date().getTime();

    // increase the range chunk size for testing purposes
    // In general, that's not a good idea, but if you know what you're doing, you may
    // be able to tweak performance by fine-tuning the range chunk size according to the
    // needs of your application and infrastructure
    pdfDefaultOptions.rangeChunkSize=1024*128;

  }

  public onUpdateFindResult(event: any): void {
    console.log('UpdateFindResult ' + event.matches);
  }

  public async getDiv(): Promise<void> {
    await this.getDivAtPosition(8, 20);
  }

  public async getDivAtPosition(page: number, position: number): Promise<void> {
    const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;

    if (!PDFViewerApplication.pdfViewer._pages[page].textLayer) {
      await PDFViewerApplication.pdfViewer._pages[page].draw();
    } else {
      const textLayer = PDFViewerApplication.pdfViewer._pages[page].textLayer;
      const divs = textLayer?.textDivs;
      const textSnippets = textLayer?.textContentItemsStr;
    }
  }

  public onPageRender(): void {
    this.currentStartTime = new Date().getTime();
  }

  public onPageRendered(event: PageRenderEvent): void {
    const endTime = new Date().getTime();
    if (event.pageNumber === 5 && this.time === 0) {
      this.time = endTime - this.startTime;
    }
    this.currentTime = endTime - this.currentStartTime;
  }

}
