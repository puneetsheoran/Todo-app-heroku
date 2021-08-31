import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackenService {
  private baseurl:string="http://localhost:5000"
  constructor(private http:HttpClient) { }
  sendData(data:any){
    return this.http.post(this.baseurl,JSON.stringify(data))
  }
}
