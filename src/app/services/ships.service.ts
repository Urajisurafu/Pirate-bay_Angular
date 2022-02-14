import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { ship } from '../../interfaces/interfaces';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ShipsService {
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  getShips(): Observable<ship[]> {
    return this.http
      .get<ship[]>('https://server-ships.herokuapp.com/shipsList')
      .pipe(
        map((data: any) => {
          return data.sort((a: any, b: any) => (a.hold > b.hold ? -1 : 1));
        }),
        catchError((err) => {
          this.errorMessage = err.message;
          return [];
        })
      );
  }
}
