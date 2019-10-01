import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/_model/producto';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { ProductoService } from 'src/app/_service/producto.service';
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';

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

  constructor(private productoService: ProductoService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.productoService.productoCambio.subscribe(data => {//variable reactiva, aquí entra cuando se crea, actualiza o elimina un registro de producto
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    //esto se va a ejecutar cada vez que mensajeCambio.next cambie (SE ELIMINÓ, SE MODIFICÓ y SE REGISTRÓ)
    this.productoService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000
      });
    });

    this.productoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(producto?: Producto) {
    let prod = producto != null ? producto : new Producto();
    this.dialog.open(ProductoDialogoComponent, {
      width: '250px',
      data: prod
    });

  }

  eliminar(producto: Producto) {
    this.productoService.eliminar(producto.idProducto).subscribe(() => {
      this.productoService.listar().subscribe(productos => {
        this.productoService.productoCambio.next(productos);
        this.productoService.mensajeCambio.next('SE ELIMINÓ');
      });
    });
  }

}
