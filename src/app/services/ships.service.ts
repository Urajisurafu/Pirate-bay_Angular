import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  tap,
  share,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  filter,
  delayWhen,
  toArray,
  distinctUntilChanged,
  timer,
} from 'rxjs';
import { ship } from '../../interfaces/interfaces';
import { map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

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
        tap((x) => console.log(x)),
        share(),
        catchError((err) => {
          this.errorMessage = err.message;
          return [];
        })
      );
  }

  getShipsAjax(): Observable<any> {
    const githubUsers = `https://server-ships.herokuapp.com/shipsList`;
    return ajax.getJSON(githubUsers).pipe(
      share(),
      catchError((err) => {
        this.errorMessage = err.message;
        return [];
      })
    );
  }

  getInfoWithSubjects(): Subject<any> {
    const subject = new ReplaySubject();

    subject.next(
      this.http.get<ship[]>('https://server-ships.herokuapp.com/shipsList')
    );

    return subject;
  }
}

// попробовать другие операторы
// 4 вида - разница
// заменить observable на subject
//
