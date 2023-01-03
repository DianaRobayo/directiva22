import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent implements OnInit {

  @Input() urlImagen: string = '';
  @Input() mensaje: string = '';
  @Input() subtitulo: string = '';
  @Input() parrafo: string = '';
  @Input() icono: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
