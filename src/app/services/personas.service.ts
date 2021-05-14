import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const base_url = environment.base_url_personas;

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas() {

    const url = `${base_url}/personas`;
  
    return this.http.get(url).pipe( map( resp => resp['personas']));

  }

  deletePersona(id: string) {

    const url = `${base_url}/personas/${id}`;    
    return this.http.delete(url);

  }

}
