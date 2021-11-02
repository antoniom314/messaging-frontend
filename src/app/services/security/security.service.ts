import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Credentials } from '../../components/login/credentials';
import { Properties } from 'src/app/properties';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private registerUrl = Properties.ROOT_URI + '/register';
  private authenticateUrl = Properties.ROOT_URI + '/authenticate';

  constructor(private http: HttpClient) { }

  public register(credentials: Credentials): Observable<any> {

    const headers = new HttpHeaders({
            Authentication: 'Basic ' + btoa(credentials.username + ':' + credentials.password),
            'Content-Type': 'application/json',
            observe: 'response',
            });

    return this.http.get<any>(this.registerUrl, {headers});
  }

  public authenticate(credentials: Credentials): Observable<any> {

    const headers = new HttpHeaders({
            Authentication: 'Basic ' + btoa(credentials.username + ':' + credentials.password),
           'Content-Type': 'application/json',
            observe: 'response',
            });

    return this.http.get<any>(this.authenticateUrl, {headers});
  }
}
