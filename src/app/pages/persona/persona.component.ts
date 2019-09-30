import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from 'src/app/_service/persona.service';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { Persona } from 'src/app/_model/persona';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  dataSource: MatTableDataSource<Persona>;
  displayedColumns: string[] = ['idPersona', 'nombres', 'apellidos', 'acciones'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private personaService: PersonaService, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.personaService.personaCambio.subscribe(data => {//variable reactiva, aquí entra cuando se crea o actualiza un registro de persona
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    //esto se va a ejecutar cada vez que mensajeCambio.next cambie (SE ELIMINÓ, SE MODIFICÓ y SE REGISTRÓ)
    this.personaService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'INFO', {
        duration: 2000
      });
    });

    this.personaService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminar(idPersona: number) {
    this.personaService.eliminar(idPersona).subscribe(() => {
      this.personaService.listar().subscribe(data => {
        this.personaService.personaCambio.next(data);//utilizando la variable reactiva
        /* //esta sería otra opción sin el uso de la variable reactiva
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        */
       this.personaService.mensajeCambio.next('SE ELIMINÓ');
      });
    });

  }

}
