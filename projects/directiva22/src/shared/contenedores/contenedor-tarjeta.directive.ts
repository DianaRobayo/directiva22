import { Directive, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[contenedorTarjeta]'
})
export class ContenedorTarjetaDirective {

  @Input('contenedorTarjeta') shadow: boolean = false;
  constructor(public renderer: Renderer2) { }

  @HostBinding('class') get classes(): string {
    return this.claseTarjeta();
  }

  private claseTarjeta(): string {
    return 'bg-card rounded-lg p-4';
  }

}
