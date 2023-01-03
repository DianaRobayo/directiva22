import { Directive, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[contenedorGlobal]'
})
export class ContenedorGlobalDirective {

  @Input('contenedorGlobal') shadow: boolean = false;
  constructor(public renderer: Renderer2) { }

  @HostBinding('class') get classes(): string {
    return this.claseContenedor();
  }

  private claseContenedor(): string {
    return 'flex flex-col flex-auto w-full max-w-screen-xl mx-auto p-6 md:p-8';
  }

}
