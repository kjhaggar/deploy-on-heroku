import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://127.0.0.1:3000/api';

  constructor(private http: HttpClient, private router : Router) { }

  register(body: any) {
    return this.http.post("/api/register", body,
    {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  showList() {
    return this.http.get("/api/displayList",
    {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
