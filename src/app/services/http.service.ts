import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
userToken=localStorage.getItem('user-inn')
  
  apiUrl:string = 'http://localhost:9090/api/user'
  constructor(private http:HttpClient) { }

  signup(value:any){
    return this.http.post(this.apiUrl+'/register', value)
  }
  login(value:any){
    return this.http.post(this.apiUrl+'/login', value)
  }
  resetPassword(value:any){
    return this.http.post(this.apiUrl+'/send-reset-link',value)
}
  postDocument(value:any){
    return this.http.post(this.apiUrl+'/saveDocumentToServer',value)
}
postAdress(value:any){
  return this.http.post(this.apiUrl+'//addUserTimeZone',value)

}
createCompany(value:any){
return this.http.post(this.apiUrl+'/createCompany',value)
}
newPassword(value:any){
return this.http.post(this.apiUrl+'//verify-reset-link/'+this.userToken,value)
}

}