import { Component, OnInit } from '@angular/core';
import { Becario } from 'src/app/models/becario.model';
import { Persona } from 'src/app/models/persona.model';
import { BecariosService } from 'src/app/services/becarios.service';
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
  public becarios: Becario[] = [];
  public desde: number = 0;
  public totalPersonas: number = 0;
  public cargando: boolean = true;
  public limite: number = 10;

  constructor(private personasService: PersonasService, private becarioService: BecariosService) { }

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas() : void {
    this.cargando = true;
    this.personasService.getPersonas(this.desde, this.limite).subscribe( resp => {
      this.cargando = false;
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
            
            // Actualizar la lista de índices de becarios asignados a la persona
            this.becarioService.getBecarios().subscribe( becarios => {
  
              let becarios_encontrados = becarios.filter( becario => becario.responsables.includes(persona.uid));
  
              becarios_encontrados.forEach( becario => {
         
                let becario_actualizado = becario.responsables.filter( p => p !== persona.uid );
                becario.responsables = becario_actualizado;
                
                this.becarioService.updateBecario(becario).subscribe();
            });  

            this.loadPersonas();          
            Swal.fire('Persona borrada', `${persona.nombre} ${persona.apellidos} fue eliminado correctamente`, 'success');
          });
          
        });
            
      }
    });

  }

  guardarCambios(persona) {
    
    this.personasService.updatePersona(persona).subscribe( () => {
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
