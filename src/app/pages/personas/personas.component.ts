import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';

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
    this.loadBecarios();
  }

  loadBecarios() : void {
    this.personasService.getPersonas().subscribe( resp => {
      this.personas = resp;
    });
  }

  deletePersona(persona: Persona) : void {
    this.personasService.deletePersona(persona._id).subscribe( resp => {
      console.log('Borrado');
      this.loadBecarios();
    });
  }

}
