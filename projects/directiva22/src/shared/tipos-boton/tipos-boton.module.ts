import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonRedondoDirective } from './boton-redondo.directive';
import { BotonRectangularDirective } from './boton-rectangular.directive';
import { BotonFormularioDirective } from './boton-formulario.directive';


@NgModule({
  declarations: [
    BotonRedondoDirective,
    BotonRectangularDirective,
    BotonFormularioDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BotonRedondoDirective,
    BotonRectangularDirective,
    BotonFormularioDirective
  ]
})
export class TiposBotonModule { }
