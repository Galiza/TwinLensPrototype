import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Login, User } from '../model/model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/';

  private user: User = {} as User;

  constructor(private http: Http) { }

  public login(email: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
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

      if (email === 'admin' && password === 'admin') {
        const adminUser: User = {
          password: 'admin',
          name: 'Admin',
          email: 'admin@admin',
          id: -1,
          isAdmin: true
        };
        resolve(adminUser);
        this.setUser(adminUser);
      } else {
        this.http.post(this.url + 'login', login, options).toPromise()
          .then(
            (response: Response) => {
              const user: User = JSON.parse(response.text());
              if (user !== undefined || user !== null) {
                user.isAdmin = false;
                resolve(user);
                this.setUser(user);
              }
            }
          ).catch(
            (error) => {
              console.log(error);
              reject(error);
            }
          );
      }
    });
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User): void {
    this.user = user;
  }
}
