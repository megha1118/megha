import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}
@Injectable({providedIn: 'root'})
export class AuthService {
    constructor (private https: HttpClient) {}

    signup(email: string, password: string){
       return this.https.post<AuthResponseData>
       ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDh4iQpKxgNKHcWl7wgOwWmjX3kvxII6ig'
        ,{
            email: email,
            password: password,
            returnSecureToken: true
        }
        );
        
    }
}