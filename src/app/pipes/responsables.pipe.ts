import { Pipe, PipeTransform } from '@angular/core';
import { Becario } from '../models/becario.model';
import { Persona } from '../models/persona.model';

@Pipe({
  name: 'responsables'
})
export class ResponsablesPipe implements PipeTransform {

  transform(personas: Persona[], becario: Becario): Persona[] {    
    
    return personas.filter( r => becario.responsables.includes(r.uid));

  }

}
