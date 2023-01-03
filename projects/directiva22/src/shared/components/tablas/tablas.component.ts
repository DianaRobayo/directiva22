import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html'
})
export class TablasComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  @Input() columnas: any[] = [];
  @Input() botonesTabla: any[] = [];
  @Input() botonesExportar: any[] = [];
  @Input() paginacion: boolean = false;
  @Input() nombreArchivo: string = '';

  public dataSource!: MatTableDataSource<any>;
  public displayedColumns: string[] = [];

  @Input() set datos(data: any[]) {
    this.setTableDataSource(data);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() eliminarDato: EventEmitter<any> = new EventEmitter<any>();
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() seleccionarDato: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    const columnNames = this.columnas.map((columna: any) => columna.nombreCampo);
    const botones = this.botonesTabla.map((columna: any) => columna.nombreCampo);
    this.displayedColumns = columnNames;
    if (this.botonesTabla.length) {
      this.displayedColumns = [...columnNames, ...botones];
    }

    console.log(this.displayedColumns);
  }

  setTableDataSource(data: any): void {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
  }

}
