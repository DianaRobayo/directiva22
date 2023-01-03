import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Directive({
  selector: '[botonRedondo]',
  providers: [ MatRipple ]
})
export class BotonRedondoDirective {

  @Input('botonRedondo') color: string = '';
  @Input() deshabilitado: boolean = false;
  @Input() conIcono: boolean = false; // Variable solo cuando es color vusTertiary

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
      return 'mat-stroked-button mat-button-base mat-button-disabled';
    }

    this.elementRef.nativeElement.style.overflow = 'hidden';

    switch (color) {
      case 'vusTertiary':
        if(this.conIcono){
          return 'border-vusTertiary hover:bg-accent hover:border-accent ' +
          'rounded-full border-2 px-3 justify-center hover:text-white ' +
          'h-10 items-center inline-flex !text-accent';
        } else {
          return 'border-vusTertiary hover:bg-accent hover:border-accent hover:text-white mat-stroked-button';
        }
      case 'cyan':
        return 'border-cyan hover:border-cyan hover:bg-cyan hover:text-white mat-stroked-button';
      case 'warn':
        return 'border-warn hover:border-warn hover:bg-warn hover:text-white mat-stroked-button';
      case 'purple':
        return 'border-purple hover:border-purple hover:bg-purple hover:text-white mat-stroked-button';
      default:
        const border = 'border-' + color;
        const background = 'hover:bg-' + color;
        this.elementRef.nativeElement.classList.add(border,background);
        return 'hover:text-white mat-stroked-button';
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
      if(color === 'vusTertiary'){
        icono.classList.add('text-' + color, 'hover:' + color, 'icon-size-5');
      } else {
        icono.classList.add('text-'+ color, 'icon-size-5');
      }
    } else {
      return;
    }
  }

}
