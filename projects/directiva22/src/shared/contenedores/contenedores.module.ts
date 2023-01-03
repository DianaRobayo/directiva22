import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorTarjetaDirective } from './contenedor-tarjeta.directive';
import { ContenedorGlobalDirective } from './contenedor-global.directive';


@NgModule({
  declarations: [
    ContenedorTarjetaDirective,
    ContenedorGlobalDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContenedorTarjetaDirective,
    ContenedorGlobalDirective
  ]
})
export class ContenedoresModule { }
