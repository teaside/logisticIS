import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ResponseContentType } from '@angular/http';

@Injectable()
export class HttpClient {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: Http) { }

  getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data)
    .map((response: Response) => response.json());
  }

  get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url))
    .map((response: Response) => response.json());
  }

  put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url), data)
      .map((response: Response) => response.json());
  }
  }
