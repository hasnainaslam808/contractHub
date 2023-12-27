import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TemplateService {
activeData=new BehaviorSubject<string>('Documents')
  constructor() { }
  setactive(tab:string){
this.activeData.next(tab);  }
}
