import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  private actionUrl: string;

  constructor(private http: HttpClient) {
    this.actionUrl = '/todolist';
  }
  public getAll<T>(): Observable<T> {

      return this.http.get<T>(this.actionUrl );

  }
}
