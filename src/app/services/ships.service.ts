import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ship } from '../../interfaces/interfaces';

@Injectable()
export class ShipsService {
  constructor(private http: HttpClient) {}

  getShips(): Observable<ship[]> {
    return this.http.get<ship[]>(
      'https://server-ships.herokuapp.com/shipsList'
    );
  }
}
