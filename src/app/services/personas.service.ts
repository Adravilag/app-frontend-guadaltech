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

  getPersonas(desde: number = 0) {

    const url = `${base_url}/personas?desde=${desde}`;
  
    return this.http.get(url).pipe( 
      
      map( (resp : {personas: Persona[], total: number}) => {

        const personas : Persona[] = resp.personas.map( (persona) => 

          new Persona(
            persona.nombre, 
            persona.apellidos, 
            persona.email, 
            persona.puesto, 
            persona.horario, 
            persona.salario, 
            persona.uid)
        );

      const total = resp.total;

      return {personas, total};

    }));

  }

  getPersonaById(id: string) {
    const url = `${base_url}/personas/${id}`;
    return this.http.get<Persona>(url).pipe( 
      
      map( (resp : Persona) => {
                
        const persona : Persona = resp['persona'];

      return persona;

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
