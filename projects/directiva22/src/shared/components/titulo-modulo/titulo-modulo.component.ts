import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-modulo',
  templateUrl: './titulo-modulo.component.html'
})
export class TituloModuloComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() parrafo: string = '';
  @Input() parrafoDos: string = '';
  @Input() colorIcono: string = '';
  @Input() icono: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
