import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(private http: HttpClient) { }

    register(body: any) {
        return this.http.post("/api/register", body,
        {
        observe: 'body',
        withCredentials:true,
        headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }

    showList() {
        return this.http.get("/api/displayList",
        {
        observe: 'body',
        withCredentials:true,
        headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
}
