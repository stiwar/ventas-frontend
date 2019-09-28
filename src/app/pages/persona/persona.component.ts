import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/_service/persona.service';
import { MatTableDataSource } from '@angular/material';
import { Persona } from 'src/app/_model/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  dataSource: MatTableDataSource<Persona>;
  displayedColumns = ['idPersona', 'nombres', 'apellidos'];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.listar().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);

    }

    );
  }

}
