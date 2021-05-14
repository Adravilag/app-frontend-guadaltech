import { Component, OnInit } from '@angular/core';
import { BecariosService } from 'src/app/services/becarios.service';

@Component({
  selector: 'app-becarios',
  templateUrl: './becarios.component.html',
  styles: [
  ]
})
export class BecariosComponent implements OnInit {

  public becarios : any = [];

  constructor(private becariosService: BecariosService) { }

  ngOnInit(): void {

    this.becariosService.getBecarios().subscribe( resp => this.becarios = resp);

  }

}
