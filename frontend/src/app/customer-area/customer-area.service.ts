import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Login, User, Album } from '../model/model';
import { Subject } from 'rxjs';
import { ErrorService } from '../error/error.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerAreaService {

    // private url = 'http://localhost:8080';

    constructor(
        private http: Http,
        private errorService: ErrorService
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

            this.http.get('/listUsers', options).toPromise()
                .then(
                    (response: Response) => {
                        let userList: User[] = JSON.parse(response.text());
                        const index = userList.findIndex(user =>  user.name === 'Admin');
                        userList = userList.splice(index, 1);
                        if (userList !== undefined || userList !== null) {
                            resolve(userList);
                        }
                    }
                ).catch(
                    (error) => {
                        this.errorService.errorHandler(error);
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

            this.http.post('/register', user, options).toPromise()
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

    public uploadClientPhotos(album: Album): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const header = new Headers();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');

            const options = new RequestOptions(
                { headers: header }
            );

            this.http.post('/savePhotos', album, options).toPromise()
                .then(
                    (response: Response) => {
                        if (response.status === 200) {
                            resolve(true);
                        }
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
        });
    }

    public getClientPhotos(id: number): Promise<Album> {
        return new Promise<Album>((resolve, reject) => {
            const header = new Headers();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');

            const options = new RequestOptions(
                { headers: header }
            );

            this.http.get('/getPhotos/:' + id, options).toPromise()
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

    public removeClient(user: User): Promise<User[]> {
        return new Promise<User[]>((resolve, reject) => {
            const header = new Headers();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');

            const options = new RequestOptions(
                { headers: header }
            );

            this.http.delete('/remove/:' + user.id, options).toPromise()
                .then(
                    (response: Response) => {
                        if (response.status === 200) {
                            resolve(JSON.parse(response.text()));
                        }
                    }
                ).catch(
                    (error) => {
                        this.errorService.errorHandler(error);
                        reject(error);
                    }
                );
        });
    }
}
