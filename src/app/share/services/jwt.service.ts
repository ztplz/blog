import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JwtService {
    // setHeader(key: String) {
    //     const headerConfig = {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     };
        
    //     if (this.getToken(key)) {
    //         headerConfig['Authorization'] = `Token ${this.getToken(key)}`;
    //     }

    //     return 
    // }

    getToken(key: string): string {
        return localStorage.getItem(key);
    }
    
    saveToken(key: string, token: string) {
        localStorage.setItem(key, token);
    }

    deleteToken(key: string) {
        localStorage.removeItem(key)
    }
}
