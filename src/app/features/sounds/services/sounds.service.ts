import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TSoundElement } from '../../../core/models';

@Injectable()
export class SoundsService {

  private _apiUrl = 'assets/sounds/sounds.json';

  constructor(private _http: HttpClient) {}

  public getSoundsList(): Observable<TSoundElement[]> {
    return this._http.get<TSoundElement[]>(this._apiUrl);
  }
}
