import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

import { JwtService } from './jwt.service';

@Injectable()
export class AdminJwtService {
    constructor(
        private http: HttpClient,
        private jwtService: JwtService
    ) {}

        
}