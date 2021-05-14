import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: [
  ]
})
export class PersonasComponent implements OnInit {

  public personas : any = [];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {

    this.personasService.getPersonas().subscribe( resp => {console.log(resp); this.personas = resp});

  }

}
