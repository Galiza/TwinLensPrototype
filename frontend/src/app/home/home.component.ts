
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public emailForm: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.createEmailForm();
    }

    public goTo(idName: string): void {
        const goToId = document.getElementById(idName);
        goToId.scrollIntoView();
    }

    private createEmailForm(): void {
        this.emailForm = new FormGroup({
            email: new FormControl('', Validators.email),
            content: new FormControl(''),
            subject: new FormControl('')
        });
    }
}
