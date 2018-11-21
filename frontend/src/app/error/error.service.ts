import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public errorTextSubject = new Subject<string>();

  constructor() { }

  public setErrorTextSubject(error: string): void {
    this.errorTextSubject.next(error);
  }

  public getErrorTextSubject(): Subject<string> {
    return this.errorTextSubject;
  }

  public errorHandler(error): void {
    switch (error.status) {
      case 503: {
        this.setErrorTextSubject('Sem conexão com servidor');
        break;
      }
      case 500: {
        const err = JSON.parse(error.text());
        this.setErrorTextSubject(err.message);
        break;
      }
    }
  }
}
