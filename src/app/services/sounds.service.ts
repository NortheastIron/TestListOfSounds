import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, forkJoin, map, switchMap } from 'rxjs';
import { TSoundElement } from './types';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  private _apiUrl = 'assets/sounds/sounds.json';

  constructor(private _http: HttpClient) {}

  public getSoundsList(): Observable<TSoundElement[]> {
    return this._http.get<TSoundElement[]>(this._apiUrl);
  }
}
