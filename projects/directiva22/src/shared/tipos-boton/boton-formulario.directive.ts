import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Directive({
  selector: '[botonForm]',
  providers: [ MatRipple ]
})
export class BotonFormularioDirective {

  @Input('botonForm') color: string = '';
  @Input() deshabilitado: boolean = false;

  constructor(private elementRef: ElementRef,
    public renderer: Renderer2,
    private ripple: MatRipple) {
  }

  @HostBinding('class') get classes(): string {
    if(this.color){
      this.claseIcono(this.color);
      return this.claseBoton(this.color);
    } else {
      this.claseIcono('primary');
      return this.claseBoton('primary');
    }
  }

  @HostListener('mousedown', [ '$event' ]) onClick(event: any): void {
    if(!this.deshabilitado){
      this.ripple.launch(event.x, event.y);
    } else {
      return;
    }
  }

  /**
   * Metodo que aplica las clases para el boton redondo
   *
   * @param [color] [String] [Color recibido por input]
   */
  private claseBoton(color: string): string {

    this.elementRef.nativeElement.disabled = false;

    // Aplica clase para el boton deshabilitado
    if(this.deshabilitado){
      this.elementRef.nativeElement.disabled = true;
      return 'mat-flat-button mat-button-base mat-button-disabled';
    }

    this.elementRef.nativeElement.style.overflow = 'hidden';

    switch (color) {
      case 'primary':
        return 'mat-button-base mat-flat-button hover:border-primary hover:bg-primary hover:text-white border-primary mat-primary';
      case 'purple':
        return 'mat-button-base mat-flat-button hover:border-purple hover:bg-purple hover:text-white border-purple mat-purple';
      default:
        const border = 'border-' + color;
        const background = 'hover:bg-' + color;
        this.elementRef.nativeElement.classList.add(border,background);
        return 'mat-flat-button mat-button-base mat-primary';
    }

  }


  /**
   * Metodo que aplica las clases para el icono
   *
   * @param [color] [String] [Color recibido por input]
   */
  private claseIcono(color: string): void {
    const icono = this.elementRef.nativeElement.querySelector('mat-icon');

    if(icono){
      icono.classList.add('text-'+ color, 'icon-size-5');
    } else {
      return;
    }
  }

}
