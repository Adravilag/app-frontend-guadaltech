import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Becario } from 'src/app/models/becario.model';
import { Persona } from 'src/app/models/persona.model';
import { BecariosService } from 'src/app/services/becarios.service';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent implements OnInit {

  public personaForm: FormGroup;
  public becarios: Becario[] = [];
  public title: string;
  public subtitle: string; 
  public crearPersona: boolean = false;

  constructor(
    private fb: FormBuilder,
    private personasService: PersonasService,
    private becariosService: BecariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({id}) => this.cargarPersona(id));    

    this.becariosService.getBecarios().subscribe( resp => {
      this.becarios = resp;
    });

  }

  cargarPersona(id) {

    if( id === 'nuevo') {
      this.title = 'Nueva Persona';
      this.subtitle = 'Manipulación de datos de la persona'
      this.personaForm = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
        apellidos: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        email: ['', Validators.required],
        horario: ['', Validators.required],
        puesto: ['', Validators.required],
        salario: ['', Validators.required],
      });
      this.crearPersona = true;
      return;
    } 

    this.personaForm = this.fb.group({
        apellidos: [{value: '', disabled: true}, Validators.required],
        email: [{value: '', disabled: true}, Validators.required],
        horario: [{value: '', disabled: true}, Validators.required],
        nombre: [{value: '', disabled: true}, Validators.required],
        puesto: [{value: '', disabled: true}, Validators.required],
        salario: [{value: '', disabled: true}, Validators.required],
      });

    this.title = 'Perfil Persona';
    this.subtitle = 'Vista preliminar del Persona'


    this.personasService.getPersonaById(id).pipe(delay(200)).subscribe( (persona : Persona) => {

      const { nombre, apellidos, email, puesto, horario, salario } = persona;      
      this.personaForm.setValue({ nombre, apellidos, email, puesto, horario, salario });
      
    }, () => this.router.navigateByUrl(`/panel/personas`));

  }

  guardarPersona() {
    
    const { nombre, id, responsables } = this.personaForm.value;    
    
    this.personasService.createPersona(this.personaForm.value).subscribe( () => {
        Swal.fire('Creado',`${nombre} creado correctamente`,'success');
    });

    this.router.navigateByUrl(`/panel/personas`)

  }


  volverAtras() {
  
    if(this.crearPersona) {
      this.router.navigateByUrl('/panel/personas');
    } else {
      this.router.navigateByUrl('/panel/becarios');
    }

  }

}
