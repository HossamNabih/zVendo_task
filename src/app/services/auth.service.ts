import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  authUrl = "http://ec2-35-178-205-140.eu-west-2.compute.amazonaws.com/api/admin/";

    constructor(private http: HttpClient) {
     
    }


    ngOnInit(): void {
     
    }


 


  sendPostRequest( url : string , data: Object): Observable<Object> {
    return this.http.post(this.authUrl+ url, data);
  }


  getRequest(url : string ,params: string ): Observable<Object> {

    return this.http.get(this.authUrl+ url + params);
  }





}
