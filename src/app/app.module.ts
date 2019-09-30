import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PersonaComponent } from './pages/persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaEdicionComponent } from './pages/persona/persona-edicion/persona-edicion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './pages/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonaEdicionComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,//necesario al crear un Service
    MaterialModule,
    ReactiveFormsModule//necesario para el manejo de formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
