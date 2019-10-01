import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PersonaComponent } from './pages/persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaEdicionComponent } from './pages/persona/persona-edicion/persona-edicion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductoDialogoComponent } from './pages/producto/producto-dialogo/producto-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonaEdicionComponent,
    ProductoComponent,
    ProductoDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,//necesario al crear un Service
    MaterialModule,
    ReactiveFormsModule,//necesario para el manejo de formularios
    FormsModule//necesario para el Two-Way-Binding
  ],
  entryComponents: [//entryComponents se agregó manualmente para el uso de diálogos
    ProductoDialogoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
