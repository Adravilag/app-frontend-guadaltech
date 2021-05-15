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
  public desde: number = 0;
  public totalPersonas: number = 0;

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas() : void {
    this.personasService.getPersonas(this.desde).subscribe( resp => {
      this.personas = resp.personas;
      this.totalPersonas = resp.total;
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

  cambiarPagina(valor) {

    this.desde += valor;
    
    if(this.desde < 0) {
      this.desde = 0;
    } else if(this.desde >= this.totalPersonas)
    {
      this.desde -= valor;
    }
    
    this.loadPersonas();

  }


}
