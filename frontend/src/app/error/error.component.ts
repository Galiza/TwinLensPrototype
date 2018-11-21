import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public errorText = '';
  public showError = false;

  constructor(
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.errorService.getErrorTextSubject().subscribe(
      (errorMsg: string) => {
        this.errorText = errorMsg;
        this.showError = true;
      }
    );
  }

}
