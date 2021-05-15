import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Becario } from 'src/app/models/becario.model';
import { Persona } from 'src/app/models/persona.model';
import { BecariosService } from 'src/app/services/becarios.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent implements OnInit {

  public personaForm: FormGroup;
  public becarios: Becario[] = [];

  constructor(
    private fb: FormBuilder,
    private personasService: PersonasService,
    private becariosService: BecariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({id}) => this.cargarPersona(id));    

    this.personaForm = this.fb.group({
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      horario: ['', Validators.required],
      nombre: ['', Validators.required],
      puesto: ['', Validators.required],
      salario: ['', Validators.required],
    });

    this.becariosService.getBecarios().subscribe( resp => {
      this.becarios = resp;
    });

  }

  cargarPersona(id) {

    this.personasService.getPersonaById(id).pipe(delay(200)).subscribe( (persona : Persona) => {

      const { nombre, apellidos, email, puesto, horario, salario } = persona;
      this.personaForm.setValue({ nombre, apellidos, email, puesto, horario, salario });

    }, () => this.router.navigateByUrl(`/panel/personas`));

  }

  volverAtras() {
  
    this.router.navigateByUrl('/panel/becarios');

  }

}
