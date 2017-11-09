import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    public _isLoggedIn: boolean;
    SetLogin(isLoggedIn: boolean) {
        this._isLoggedIn = isLoggedIn;
    }
    IsLogged(): boolean {
        return this._isLoggedIn;
    }
}