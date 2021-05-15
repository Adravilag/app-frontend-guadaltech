import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Persona } from '../models/persona.model';

const base_url = environment.base_url_personas;

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas() {

    const url = `${base_url}/personas`;
  
    return this.http.get<Persona[]>(url).pipe( 
      
      map( (resp : Persona[]) => {

        const personas : Persona[] = resp['personas'].map( (persona) => 

          new Persona(
            persona.nombre, 
            persona.apellidos, 
            persona.email, 
            persona.password, 
            persona.img, 
            persona.role, 
            persona.uid)
        );

      return personas;

    }));

  }

  deletePersona(id: string) {

    const url = `${base_url}/personas/${id}`;    
    return this.http.delete(url);

  }

  updatePersona(persona: Persona) {

    const url = `${base_url}/personas/${persona.uid}`;
    console.log(url);
    return this.http.put(url, persona);
    
  }

}
