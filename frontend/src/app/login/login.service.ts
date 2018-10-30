import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Login } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/';

  constructor(private http: Http) { }

  public login(email: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const header = new Headers();
      header.append('Access-Control-Allow-Origin', '*');
      header.append('Access-Control-Allow-Headers', 'Content-Type');
      header.append('Access-Control-Allow-Methods', '*');

      const options = new RequestOptions(
        { headers: header }
      );

      const login: Login = {
        email: email,
        password: password
      };

      this.http.post(this.url + 'login', login, options).toPromise()
        .then(
          (response: Response) => {
            const allow = JSON.parse(response.text());
            const containUser = JSON.parse(response.text());
            if (containUser) {
              resolve(containUser);
            }
          }
        ).catch(
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });
  }
}
