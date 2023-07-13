import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthReposnseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(private http: HttpClient) {}

    signup(email: string, password: string){
        return this.http.post<AuthReposnseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_HWB51GpImzvSbID1EdVR_8Hunk6Abp4', {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
}