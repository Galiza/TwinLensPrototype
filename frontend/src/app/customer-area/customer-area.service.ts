import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Login, User } from '../model/user.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerAreaService {

    private url = 'http://localhost:8080/';


    constructor(
        private http: Http
    ) { }

    public fetchClientList(): Promise<User[]> {
        return new Promise<User[]>((resolve, reject) => {
            const header = new Headers();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');

            const options = new RequestOptions(
                { headers: header }
            );

            this.http.get(this.url + 'listUsers', options).toPromise()
                .then(
                    (response: Response) => {
                        const user: User[] = JSON.parse(response.text());
                        if (user !== undefined || user !== null) {
                            resolve(user);
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

    public addNewClient(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const header = new Headers();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');

            const options = new RequestOptions(
                { headers: header }
            );

            this.http.post(this.url + 'register', user, options).toPromise()
                .then(
                    (response: Response) => {
                        if (response.status === 200) {
                            resolve(JSON.parse(response.text()));
                        }
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
        });
    }
}
