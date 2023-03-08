import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  constructor(private http: HttpClient) {}

  private api = 'https://mailthis.to/geekyChick9';

  contactFormPost(input: any) {
    return this.http
      .post(this.api, input, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .pipe(
        map(
          (response: any) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      );
  }
}
