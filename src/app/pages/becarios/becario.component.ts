import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Becario } from 'src/app/models/becario.model';
import { Persona } from 'src/app/models/persona.model';
import { BecariosService } from 'src/app/services/becarios.service';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-becario',
  templateUrl: './becario.component.html',
  styles: [
  ]
})
export class BecarioComponent implements OnInit {

  public becarioForm: FormGroup;
  public personas: Persona[] = [];
  public becarioSeleccionado: Becario;
  public title: string;

  constructor(
    private fb: FormBuilder,
    private personasService: PersonasService,
    private becariosService: BecariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({id, title}) => this.cargarBecario(id));    

    this.becarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      apellidos: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      puesto: ['', Validators.required],
      horario: ['', Validators.required],
      responsables: ['', [Validators.required, Validators.maxLength(4)]],
    });

    this.personasService.getPersonas().subscribe( resp => {
      this.personas = resp.personas;
    });

  }

  cargarBecario(id) {

    if( id === 'nuevo') {
      this.title = 'Nuevo Becario';
      return;
    }

    this.title = 'Editar Becario';
    this.becariosService.getBecarioById(id).pipe(delay(100)).subscribe( (becario : Becario) => {

      this.becarioSeleccionado = becario;
      const { nombre, apellidos, puesto, horario, responsables } = becario;

      this.becarioForm.setValue({nombre, apellidos, puesto, horario, responsables});

    }, () => this.router.navigateByUrl(`/panel/becarios`));


  }

  guardarBecario() {
    
    const { nombre } = this.becarioForm.value;    

    if(this.becarioSeleccionado) {

      
      // actualizar
      const data = { ...this.becarioForm.value, id : this.becarioSeleccionado.id, fechaalta: this.becarioSeleccionado.fechaalta }

      this.becariosService.updateBecario(data).subscribe( () => {
        Swal.fire('Actualizado',`${nombre} actualizado correctamente`,'success');
      });

    } else {

      // Crear

      this.becariosService.createBecario(this.becarioForm.value).subscribe( () => {
        Swal.fire('Creado',`${nombre} creado correctamente`,'success');
      });
      
    }

    this.router.navigateByUrl(`/panel/becarios`)

  }

  
  volverAtras() {
  
    this.router.navigateByUrl('/panel/becarios');

  }

}
