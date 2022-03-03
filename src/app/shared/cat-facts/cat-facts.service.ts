import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CatFact} from './catFact';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  CAT_FACT_URL = 'https://cat-fact.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getCatFact(): Promise<CatFact> {
    let params = new HttpParams();
    params = params.append('animal_type', 'cat');
    return firstValueFrom(this.http.get<CatFact>(`${this.CAT_FACT_URL}/facts/random`, {params: params}));
  }

}
