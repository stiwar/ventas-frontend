import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { Producto } from '../_model/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = `${environment.HOST_SERVER}/productos`;
  productoCambio = new Subject<Producto[]>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  listarPorId(idPaciente: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/${idPaciente}`);
  }

  registrar(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.url}`, producto);
  }

  modificar(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.url}`, producto);
  }

  eliminar(idProducto: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.url}/${idProducto}`);
  }
}
