import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiposBotonModule } from './tipos-boton/tipos-boton.module';
import { ComponentsModule } from './components/components.module';
import { ContenedoresModule } from './contenedores/contenedores.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TiposBotonModule,
    ComponentsModule,
    ContenedoresModule,
    PipesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TiposBotonModule,
    ComponentsModule,
    ContenedoresModule,
    PipesModule
  ]
})
export class SharedModule
{
}
