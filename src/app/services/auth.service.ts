import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getToken(): string | null {
    return localStorage.getItem('user-inn');
  }

  isAuthenticated(): boolean {
    // Check if the token exists and is not expired
    const token = this.getToken();
    return !!token;
  }




  
//   private fileUploadedSource = new Subject<string>();

//   fileUploaded$ = this.fileUploadedSource.asObservable();

//   uploadFile(fileUrl: string) {
//     this.fileUploadedSource.next(fileUrl);
// }
}