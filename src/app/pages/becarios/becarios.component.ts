import { Component, OnInit } from '@angular/core';
import { Becario } from 'src/app/models/becario.model';
import { Persona } from 'src/app/models/persona.model';
import { BecariosService } from 'src/app/services/becarios.service';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-becarios',
  templateUrl: './becarios.component.html',
  styles: [
  ]
})
export class BecariosComponent implements OnInit {

  public becarios : Becario[] = [];
  public personas : Persona[] = [];

  constructor(private becariosService: BecariosService, private personasService: PersonasService) { }

  ngOnInit(): void {
    this.loadBecarios();
    this.loadPersonas();
  }

  loadBecarios() : void {
    this.becariosService.getBecarios().subscribe( (resp : Becario[]) => {
      this.becarios = resp;
      console.log(this.becarios);
    });
  }

  loadPersonas() : void {
    this.personasService.getPersonas().subscribe( (resp : Persona[]) => {
      this.personas = resp;
      console.log(this.personas);
    });
  }

  deleteBecario(becario: Becario) : void {

    Swal.fire({
      title: '¿Borrar becario?',
      text: `¿Está seguro de borrar a ${becario.nombre} ${becario.apellidos}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if(result.value) {
        this.becariosService.deleteBecario(becario.id).subscribe( () => {
          this.loadBecarios();
          this.loadPersonas();          
          Swal.fire('Becario borrado', ` ${becario.nombre} ${becario.apellidos} fue eliminado correctamente`, 'success');
        })
      }
    });

  }

}
