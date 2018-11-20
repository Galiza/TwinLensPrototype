import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public errorTextSubject = new Subject<string>();
  public showError = false;

  constructor() { }

  public setErrorTextSubject(error: string): void {
    this.errorTextSubject.next(error);
  }

  public getErrorTextSubject(): Subject<string> {
    return this.errorTextSubject;
  }

  public setShowError(showError: boolean): void {
    this.showError = showError;
  }

  public getShowError(): boolean {
    return this.showError;
  }
}
