import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private loginService: LoginService,
        public router: Router
    ) { }

    public canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }


    private isAuthenticated(): boolean {
        if (Object.keys(this.loginService.getUser()).length !== 0 &&
            this.loginService.getUser() !== null &&
            this.loginService.getUser() !== undefined
        ) {
            return true;
        }
        return false;
    }
}
