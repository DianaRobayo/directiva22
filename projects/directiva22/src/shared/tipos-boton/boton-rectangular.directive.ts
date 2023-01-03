import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[botonRectangular]'
})
export class BotonRectangularDirective {

  @Input('botonRectangular') iconoCentro: boolean = false;

  constructor(private elementRef: ElementRef,
    public renderer: Renderer2) {
  }

  @HostBinding('class') get classes(): string {
    this.claseIcono();
    this.claseTexto();
    return this.claseBoton();
  }

  /**
   * Metodo que aplica las clases para el boton rectangular
   */
  private claseBoton(): string {
    return 'border-2 border-vusTertiary rounded-lg shadow bg-card hover:shadow-xl ' +
      'transition duration-150 ease-in-out hover:bg-accent hover:border-accent ' +
      'hover:scale-105 hover:text-white m-2 p-4 w-60 h-30 flex flex-row items-center ';
  }

  /**
   * Metodo que aplica las clases para el icono
   */
  private claseIcono(): void {
    const icon = this.elementRef.nativeElement.querySelector('div mat-icon');
    const div = this.elementRef.nativeElement.querySelector('div');

    if(icon){
      if(this.iconoCentro){
        icon.classList.add('icon-size-12', 'text-vusTertiary');
        div.classList.add('justify-center', 'flex-row');
      } else {
        icon.classList.add('icon-size-12', 'text-vusTertiary');
        div.classList.add('mr-4', 'justify-center', 'flex');
      }
    } else {
      return;
    }
  }

  /**
   * Metodo que aplica las clases para el span donde se ubica el texto
   */
  private claseTexto(): void {
    const texto = this.elementRef.nativeElement.querySelector('span');

    if(texto){
      if(this.iconoCentro){
        texto.classList.add('inline-block', 'align-baseline', 'leading-tight','text-lg','font-bold');
      } else {
        texto.classList.add('text-left', 'leading-tight', 'text-lg', 'font-bold');
      }
    }
  }

}
