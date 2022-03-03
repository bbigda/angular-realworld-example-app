import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpParams} from '@angular/common/http';
import {CatFact} from './catFact';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  CAT_FACT_URL = 'https://cat-fact.herokuapp.com';

  private http: HttpClient;

  constructor(httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
  }

  getCatFact(): Promise<CatFact> {
    let params = new HttpParams();
    params = params.append('animal_type', 'cat');
    return firstValueFrom(this.http.get<CatFact>(`${this.CAT_FACT_URL}/facts/random`, {params: params}));
  }

}
