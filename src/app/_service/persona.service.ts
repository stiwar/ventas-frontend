import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Persona } from '../_model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = `${environment.HOST_SERVER}/personas`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Persona[]>(this.url);
  }
}
