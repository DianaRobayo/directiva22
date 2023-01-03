import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { TituloModuloComponent } from './titulo-modulo/titulo-modulo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TiposBotonModule } from '../tipos-boton/tipos-boton.module';
import { TablasComponent } from './tablas/tablas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    EncabezadoComponent,
    PieDePaginaComponent,
    TituloModuloComponent,
    TablasComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    TiposBotonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTableExporterModule,
    MatTooltipModule
  ],
  exports:[
    EncabezadoComponent,
    PieDePaginaComponent,
    TituloModuloComponent,
    TablasComponent
  ]
})
export class ComponentsModule { }
