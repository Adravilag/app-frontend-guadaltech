import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

const base_url = environment.base_url_becarios;

@Injectable({
  providedIn: 'root'
})
export class BecariosService {

  constructor(private http: HttpClient) { }

  getBecarios() {

    const url = `${base_url}/becarios`;
  
    return this.http.get(url);

  }

}
