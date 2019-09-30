import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Persona } from '../_model/persona';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = `${environment.HOST_SERVER}/personas`;
  personaCambio = new Subject<Persona[]>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }

  listarPorId(idPaciente: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/${idPaciente}`);
  }

  registrar(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.url}`, persona);
  }

  modificar(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.url}`, persona);
  }

  eliminar(idPaciente: number): Observable<Persona> {
    return this.http.delete<Persona>(`${this.url}/${idPaciente}`);
  }

}
