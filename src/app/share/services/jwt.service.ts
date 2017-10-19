import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JwtService {
    constructor(){}

    private header: HttpHeaders = new HttpHeaders()

    setHeader(key: string): HttpHeaders {
        const headerConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

    //    this.header.set("Content-Type", "application/json");
    //    this.header.set("Accept", "application/json");
        console.log(key);
        console.log(this.getToken(key));
        if (this.getToken(key)) {
            console.log(this.getToken(key));
            headerConfig['Authorization'] = `Bearer ${this.getToken(key)}`;
            // this.header.set("Authorization", `Bearer ${this.getToken(key)}`)
        }

        console.log(this.header);

        return new HttpHeaders(headerConfig);
        // return this.header;
    }

    getToken(key: string): string {
        console.log(key);
        return localStorage.getItem(key);
    }
    
    saveToken(key: string, token: string) {
        console.log(key)
        console.log(token)
        localStorage.setItem(key, token);
        console.log(this.getToken(key));
    }

    deleteToken(key: string) {
        localStorage.removeItem(key)
    }
}
