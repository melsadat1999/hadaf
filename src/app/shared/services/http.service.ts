import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../confing/config';
@Injectable({
    providedIn: 'root'
})


export class HttpService {
    constructor(private http: HttpClient) { }
    get<T>(path: string, params: any = new HttpParams()): Observable<any> {
        return this.http.get<T>(`${Config.apiUrl}${path}`, { params })
        // .pipe(catchError(err => this.core.handleError(err)))
    }
    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${Config.apiUrl}${path}`, body)
    }
    delete(path: string, body: Object = {}): Observable<any> {
        return this.http.delete(`${Config.apiUrl}${path}`, body)
    }
    update(path: string, body: Object = {}): Observable<any> {
        return this.http.put(`${Config.apiUrl}${path}`, body)
    }
}
