import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: [
  ]
})
export class PersonasComponent implements OnInit {

  public personas : Persona[] = [];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas() : void {
    this.personasService.getPersonas().subscribe( resp => {
      this.personas = resp;
    });
  }

  deletePersona(persona: Persona) : void {

    Swal.fire({
      title: '¿Borrar persona?',
      text: `¿Está seguro de borrar a ${persona.nombre} ${persona.apellidos}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if(result.value) {
        this.personasService.deletePersona(persona.uid).subscribe( () => {
          this.loadPersonas();          
          Swal.fire('Persona borrada', `${persona.nombre} ${persona.apellidos} fue eliminado correctamente`, 'success');
        })
      }
    });

  }

  guardarCambios(persona) {
    this.personasService.updatePersona(persona).subscribe( resp => {
      Swal.fire('Actualizado',`${persona.nombre} ${persona.apellidos} ha sido actualizado correctamente`,'success');

      this.loadPersonas();
    });

  }

}
