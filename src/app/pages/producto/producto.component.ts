import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/_model/producto';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProductoService } from 'src/app/_service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  dataSource: MatTableDataSource<Producto>;
  displayedColumns: string[] = ['idProducto', 'nombre', 'marca', 'acciones'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {

    this.productoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
