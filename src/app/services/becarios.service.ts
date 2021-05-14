import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Becario } from '../models/becario.model';
import { map } from 'rxjs/operators';

const base_url = environment.base_url_becarios;

@Injectable({
  providedIn: 'root'
})
export class BecariosService {

  constructor(private http: HttpClient) { }

  getBecarios() {

    const url = `${base_url}/becarios`;
  
    return this.http.get<Becario[]>(url).pipe(
      map( (resp : Becario[]) => resp.filter( r => r.id !== '' ))
    );

  }

  deleteBecario(id: string) {

    const url = `${base_url}/becarios/${id}`;    
    return this.http.delete(url);

  }

}
