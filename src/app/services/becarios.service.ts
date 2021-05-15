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
      
      map( (resp : Becario[]) => resp.filter( r => r.id !== '' )),
      map( (resp : Becario[]) => {
      
        const becarios : Becario[] = resp.map( becario => 
          
          new Becario(
            becario.nombre, 
            becario.apellidos, 
            becario.puesto, 
            becario.horario, 
            becario.fechaalta, 
            becario.responsables, 
            becario.id)
        );
  
        return becarios;

    }));

  }

  getBecarioById(id: string) {
    const url = `${base_url}/becarios/${id}`;
    return this.http.get(url);
  }

  deleteBecario(id: string) {

    const url = `${base_url}/becarios/${id}`;    
    return this.http.delete(url);

  }

  updateBecario( becario: Becario) {
    
    
    console.log(becario);
    
    const url = `${base_url}/becarios/${becario.id}`;
    console.log(url);
    return this.http.put(url, becario);
  
  }

  createBecario(
    becarios: {
      nombre: string, 
      apellidos: string,
      puesto: string, 
      horario: string, 
      responsables: string[], 
  }) {

    const url = `${base_url}/becarios`;
    const f = new Date();
    const fechaalta = f.getDate() + "/"+ f.getMonth()+ "/" +f.getFullYear();
    
    return this.http.post(url, {fechaalta, ...becarios });
  
  }

}
