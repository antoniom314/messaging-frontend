import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Properties } from 'src/app/properties';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = Properties.ROOT_URI + '/get-users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {

    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            observe: 'response'
            });

    return this.http.get<any>(this.usersUrl, {headers});
  }

}
