import { Component, OnInit } from '@angular/core';
import { Becario } from 'src/app/models/becario.model';
import { BecariosService } from 'src/app/services/becarios.service';

@Component({
  selector: 'app-becarios',
  templateUrl: './becarios.component.html',
  styles: [
  ]
})
export class BecariosComponent implements OnInit {

  public becarios : Becario[] = [];

  constructor(private becariosService: BecariosService) { }

  ngOnInit(): void {
    this.loadBecarios();
  }

  loadBecarios() : void {
    this.becariosService.getBecarios().subscribe( resp => {
      this.becarios = resp;
    });
  }

  deleteBecario(becario: Becario) : void {
    this.becariosService.deleteBecario(becario.id).subscribe( resp => {
      console.log('Borrado');
      this.loadBecarios();
    });
  }

}
