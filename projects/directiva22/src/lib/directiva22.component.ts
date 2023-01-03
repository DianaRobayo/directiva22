/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ibarrio, Iletra, Iciudad, Icuadrante, Idepartamento,
  Iestrato, Ilocalidad, ImotivoActualizacion, Inomenclatura,
  Ipais, ItipoVia, Izona, IubicacionUsuario
} from './directiva22.types';
import { Directiva22Service } from './directiva22.service';
import { constantesDirectiva } from './constantesDirectiva';
// import { UserService } from '../user/user.service';

@Component({
  selector: 'lib-directiva22',
  templateUrl: 'directiva22.component.html',
  styles: [
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class Directiva22Component implements OnInit, OnDestroy {

  /**Variables de formularios reactivos */
  seccionUnoForm: UntypedFormGroup;
  seccionDosForm: UntypedFormGroup;

  /**Objetos */
  paises: Ipais[];
  departamentos: Idepartamento[];
  ciudades: Iciudad[];
  localidades: Ilocalidad[];
  estratos: Iestrato[];
  zonas: Izona[];
  nomenclaturas: Inomenclatura[];
  barrios: Ibarrio[];
  motivos: ImotivoActualizacion[];
  tiposVia: ItipoVia[];
  letras: Iletra[];
  cuadrantes: Icuadrante[];
  // usuarioDirectiva: IubicacionUsuario;
  loading = true;
  loadingModules: boolean = false;
  banderaSteper: boolean = true;
  paisExtranjero: boolean = false;
  // user: any;

  previsualizacion: FormControl;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<Directiva22Component>,
    private _formBuilder: UntypedFormBuilder,
    // private _userService: UserService,
    private _directiva22Service: Directiva22Service,
    ) {
      this.seccionUnoForm = this._formBuilder.group({});
      this.seccionDosForm = this._formBuilder.group({});
      this.previsualizacion = new FormControl<any>('');

      /**Objetos */
      this.paises = [];
      this.departamentos = [];
      this.ciudades = [];
      this.localidades = [];
      this.estratos = [];
      this.zonas = [];
      this.nomenclaturas = [];
      this.barrios = [];
      this.motivos = [];
      this.tiposVia = [];
      this.letras = [];
      this.cuadrantes = [];
  }

  ngOnInit(): void {
    // this._userService.user$
    //   .pipe(takeUntil(this._unsubscribeAll))
    //   .subscribe((user) => {
    //     this.user = user;
    //   });
    
    // this.previsualizacion = new FormControl('');
    this.getMaestros();
    this.formControlSeccionUno();
    this.formControlSeccionDos();
    // this.ciudades = [];
    // this.barrios = [];
    this._deshabilitarCampos();
  }

  formControlSeccionUno(): void {
    this.seccionUnoForm = this._formBuilder.group({
      Pais: [constantesDirectiva.idPaisColombia, [Validators.required]],
      Departamento: ['', [Validators.required]],
      Ciudad: ['', [Validators.required]],
      Zona: ['', [Validators.required]],
      Nomenclatura: ['', [Validators.required]],
      Localidad: ['', [Validators.required]],
      Barrio: ['', [Validators.required]],
      // user: [this.user.userKey]
    });
  }

  formControlSeccionDos(): void {
    this.seccionDosForm = this._formBuilder.group({
      ViaPrincipal: [null, [Validators.required]],
      NumeroDeViaPrincipal: [null, [Validators.required, Validators.min(0), Validators.max(300)]],
      NombreDeViaPrincipal: [null, [Validators.required, Validators.maxLength(50)]],
      SinonimoDeViaPrincipal: ['', [Validators.maxLength(50)]],
      LetraDeViaPrincipal: [''],
      NumeroDePlaca: [null, [Validators.required, Validators.min(0), Validators.max(99)]],
      BisDeViaPrincipal: [false],
      LetraDeBisDeViaPrincipal: [''],
      CuadranteDeViaPrincipal: [''],
      NumeroDeViaGeneradora: [null, [Validators.required, Validators.min(0), Validators.max(300)]],
      LetraDeViaGeneradora: [''],
      CuadranteDeViaGeneradora: [''],
      Estrato: ['', [Validators.required]],
      Complemento: ['', [Validators.required]],
      MotivoDeLaActualizacion: ['', [Validators.required]],
      direccion: [''],
    });
  }

  /**
   * Evento de cambio de departamento, retorna el listado de ciudades,
   */
  async cambioDepartamento(event: any): Promise<void> {
    if (event && event.value) {
      this.seccionUnoForm.controls['Ciudad'].setValue('');
      this.seccionUnoForm.controls['Localidad'].setValue('');
      this.seccionUnoForm.controls['Barrio'].setValue('');
      this.seccionUnoForm.controls['Nomenclatura'].setValue('');
      this.seccionUnoForm.updateValueAndValidity();
      this.loadingModules = true;
      await this._directiva22Service.obtenerCiudades(event.value).toPromise()
        .then(response => (this.ciudades = response, this.loadingModules = false));
      this.seccionUnoForm.controls['Ciudad'].enable();
    }
  }

  /**
   * Evento de cambio de localidad, retorna el listado de barrios,
   */
  async cambioLocalidad(event: any): Promise<void> {
    if (event && event.value) {
      this.loadingModules = true;
      await this._directiva22Service.obtenerBarrios(event.value).toPromise()
        .then(response => (this.barrios = response, this.loadingModules = false));
      this.seccionUnoForm.controls['Barrio'].setValue(null);
      this.seccionUnoForm.controls['Barrio'].updateValueAndValidity();
      this.seccionUnoForm.controls['Barrio'].enable();
    }
  }

  /**
   * Metodo que se utiliza para cambiar las validaciones de
   * algunos campos al momento de cambiar el select ciudad
   *
   * @param value valor del select ciudad
   */
  async cambioCiudad(event: any): Promise<void> {
    if (!event || !event.value) {
      return;
    }

    if (event.value !== constantesDirectiva.idCiudadBogota) {
      this.seccionUnoForm.controls['Nomenclatura'].clearValidators();
      this.seccionUnoForm.controls['Nomenclatura'].updateValueAndValidity();
      this.seccionUnoForm.controls['Nomenclatura'].disable();
      this.seccionUnoForm.controls['Localidad'].clearValidators();
      this.seccionUnoForm.controls['Localidad'].setValue(null);
      this.seccionUnoForm.controls['Localidad'].updateValueAndValidity();
      this.seccionUnoForm.controls['Localidad'].disable();
      this.seccionUnoForm.controls['Barrio'].clearValidators();
      this.seccionUnoForm.controls['Barrio'].setValue(null);
      this.seccionUnoForm.controls['Barrio'].updateValueAndValidity();
      this.seccionUnoForm.controls['Barrio'].disable();
      this.seccionUnoForm.controls['Zona'].enable();
      this.seccionUnoForm.controls['Zona'].setValue(null);

    } else {
      this.loadingModules = true;
      await this._directiva22Service.obtenerLocalidades().toPromise()
        .then(response => (this.localidades = response, this.loadingModules = false));
      this.seccionUnoForm.controls['Nomenclatura'].enable();
      this.seccionUnoForm.controls['Localidad'].enable();
      this.seccionDosForm.enable();
      this.formControlSeccionDos();
      this.previsualizacion.setValue('');
      this.seccionDosForm.controls['Complemento'].clearValidators();
      this.seccionDosForm.controls['Complemento'].updateValueAndValidity();
      this.banderaSteper = true;
    }
  }

  /**
   * Metodo que se utiliza para cambiar las validaciones de algunos
   * campos al momento de cambiar el select zona
   *
   * @param value valor del select zona
   */
  cambioZona(event: any): void {
    if (!event || !event.value) {
      return;
    }
    // id de zona rural (En dev)
    if (event.value === constantesDirectiva.idZonaRural || this.paisExtranjero) {
      this.previsualizacion.setValue('');
      this.formControlSeccionDos();
      this.seccionDosForm.disable();
      this.seccionDosForm.clearValidators();
      this.seccionDosForm.controls['Complemento'].setValue('');
      this.seccionDosForm.controls['Complemento'].setValidators([Validators.required]);
      this.seccionDosForm.controls['Complemento'].updateValueAndValidity();
      this.seccionDosForm.controls['Complemento'].enable();
      this.seccionDosForm.controls['MotivoDeLaActualizacion'].setValidators([Validators.required]);
      this.seccionDosForm.controls['MotivoDeLaActualizacion'].updateValueAndValidity();
      this.seccionDosForm.controls['MotivoDeLaActualizacion'].enable();
      this.banderaSteper = false;
    } else {
      this.seccionDosForm.enable();
      this.formControlSeccionDos();
      this.previsualizacion.setValue('');
      this.seccionDosForm.updateValueAndValidity();
      this.seccionDosForm.controls['Complemento'].clearValidators();
      this.seccionDosForm.controls['Complemento'].updateValueAndValidity();
      this.seccionDosForm.controls['Complemento'].setValue('');
      this.banderaSteper = true;
    }
  }

  /**
   * Metodo que se utiliza para cambiar las validaciones de algunos
   * campos al momento de cambiar el select via
   *
   * @param value valor del select via
   */
  cambioVia(event: any): void {
    if (!event || !event.value) {
      return;
    }
    // Id de Avenida calle, es el único que tiene Avenida
    if (event.value !== constantesDirectiva.idAvenida) {
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].enable();
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].setValue(null);
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].clearValidators();
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].updateValueAndValidity();
    } else {
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].disable();
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].setValue(null);
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].clearValidators();
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].updateValueAndValidity();
    }

    if (event.value === '0') {
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].setValue(null);
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].setValidators([Validators.required]);
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].updateValueAndValidity();
      this.seccionDosForm.controls['NumeroDeViaPrincipal'].enable();
    }
  }

  /**
   * Evento al cambiar el pais se valida el id del pais
   * seleccion colombia retona listado de departamentos,
   * seleccion diferente retorna listado de ciudad
   */
  async cambioPais(event: any): Promise<void> {
    if (event && event.value && event.value === constantesDirectiva.idPaisColombia) {
      this.loadingModules = true;
      await this._directiva22Service.obtenerDepartamentos().toPromise()
        .then(response => (this.departamentos = response, this.loadingModules = false));

      this.seccionUnoForm.controls['Departamento'].enable();
      this.seccionUnoForm.controls['Departamento'].setValidators(Validators.required);
      this.seccionUnoForm.controls['Departamento'].setValue(null);
      this.seccionUnoForm.controls['Departamento'].updateValueAndValidity();

      this.seccionUnoForm.controls['Ciudad'].enable();
      this.seccionUnoForm.controls['Ciudad'].setValidators(Validators.required);
      this.seccionUnoForm.controls['Ciudad'].setValue(null);
      this.seccionUnoForm.controls['Ciudad'].updateValueAndValidity();

      this.seccionUnoForm.controls['Nomenclatura'].enable();
      this.seccionUnoForm.controls['Nomenclatura'].setValidators(Validators.required);
      this.seccionUnoForm.controls['Nomenclatura'].setValue(null);
      this.seccionUnoForm.controls['Nomenclatura'].updateValueAndValidity();

      this.seccionUnoForm.controls['Localidad'].enable();
      this.seccionUnoForm.controls['Localidad'].setValidators(Validators.required);
      this.seccionUnoForm.controls['Localidad'].setValue(null);
      this.seccionUnoForm.controls['Localidad'].updateValueAndValidity();

      this.seccionUnoForm.controls['Barrio'].enable();
      this.seccionUnoForm.controls['Barrio'].setValidators(Validators.required);
      this.seccionUnoForm.controls['Barrio'].setValue(null);
      this.seccionUnoForm.controls['Barrio'].updateValueAndValidity();

      this.paisExtranjero = false;
    } else {
      this.paisExtranjero = true;
      this.loadingModules = true;
      await this._directiva22Service.obtenerCiudadesExtranjeras(event.value).toPromise()
        .then(response => (this.ciudades = response, this.loadingModules = false));
      this.seccionUnoForm.controls['Ciudad'].enable();
      this.seccionUnoForm.controls['Ciudad'].setValidators(Validators.required);
      this.seccionUnoForm.controls['Ciudad'].setValue(null);
      this.seccionUnoForm.controls['Ciudad'].updateValueAndValidity();

      this.seccionUnoForm.controls['Departamento'].clearValidators();
      this.seccionUnoForm.controls['Departamento'].setValue(null);
      this.seccionUnoForm.controls['Departamento'].updateValueAndValidity();

      this.seccionUnoForm.controls['Nomenclatura'].disable();
      this.seccionUnoForm.controls['Nomenclatura'].clearValidators();
      this.seccionUnoForm.controls['Nomenclatura'].setValue(null);
      this.seccionUnoForm.controls['Nomenclatura'].updateValueAndValidity();

      this.seccionUnoForm.controls['Localidad'].disable();
      this.seccionUnoForm.controls['Localidad'].clearValidators();
      this.seccionUnoForm.controls['Localidad'].setValue(null);
      this.seccionUnoForm.controls['Localidad'].updateValueAndValidity();

      this.seccionUnoForm.controls['Barrio'].disable();
      this.seccionUnoForm.controls['Barrio'].clearValidators();
      this.seccionUnoForm.controls['Barrio'].setValue(null);
      this.seccionUnoForm.controls['Barrio'].updateValueAndValidity();
    }
  }

  /**
   * Metodo que se encarga de recopilar el value de x campos, concatenarlos
   * y setarlo en el campo previsualización
   */
  escribirPrevisualizacion(): void {
    const via = this.seccionDosForm.controls['ViaPrincipal'].value;
    const abreViaPrincipal = this.tiposVia.find(x => x.idVia === via)?.descripcionVia || null;
    const cuadranteViaPrincipal = this.seccionDosForm.controls['CuadranteDeViaPrincipal'].value;
    let cuadranteDeViaPrincipal = null;

    if (cuadranteViaPrincipal) {
      cuadranteDeViaPrincipal = this.cuadrantes.find(x => x.idCuadrante === cuadranteViaPrincipal)?.nombreCuadrante || null;
    }

    const letraVia = this.seccionDosForm.controls['LetraDeViaPrincipal'].value;
    const letViaPrincipal = this.letras.find(x => x.idLetraVia === letraVia)?.letraVia || null;
    const nombreViaPrincipal = this.seccionDosForm.controls['NombreDeViaPrincipal'].value || null;
    const numeroViaPrincipal = this.seccionDosForm.controls['NumeroDeViaPrincipal'].value || null;
    const sinonimoViaPrincipal = this.seccionDosForm.controls['SinonimoDeViaPrincipal'].value || null;
    const letraBis = this.seccionDosForm.controls['LetraDeBisDeViaPrincipal'].value;
    const letraBIS = this.letras.find(x => x.idLetraVia === letraBis)?.letraVia || null;
    const bis = this.seccionDosForm.controls['BisDeViaPrincipal'].value ? 'Bis' : '';
    const numeroDeViaGeneradora = this.seccionDosForm.controls['NumeroDeViaGeneradora'].value || null;
    const letraViaGeneradora = this.seccionDosForm.controls['LetraDeViaGeneradora'].value;
    const letraDeViaG = this.letras.find(x => x.idLetraVia === letraViaGeneradora)?.letraVia || null;
    const placa = this.seccionDosForm.controls['NumeroDePlaca'].value || null;
    const complemento = this.seccionDosForm.controls['Complemento'].value || null;

    const test = (abreViaPrincipal ? (abreViaPrincipal + ' ') : '')
      + (numeroViaPrincipal ? (numeroViaPrincipal + ' ') : '')
      + (nombreViaPrincipal ? (nombreViaPrincipal + ' ') : '')
      + (sinonimoViaPrincipal ? (sinonimoViaPrincipal + ' ') : '')
      + (letViaPrincipal ? (letViaPrincipal + ' ') : '')
      + (bis ? (bis + ' ') : '')
      + (letraBIS ? (letraBIS + ' ') : '')
      + (cuadranteDeViaPrincipal ? (cuadranteDeViaPrincipal + ' ') : '')
      + (this.banderaSteper ? (' # ') : '')
      + (numeroDeViaGeneradora ? (numeroDeViaGeneradora + ' ') : '')
      + (letraDeViaG ? (letraDeViaG + ' ') : '')
      + (this.banderaSteper ? (' - ') : '')
      + (placa ? (placa + ' ') : '')
      + (complemento ? (complemento) : '');
    this.previsualizacion.setValue(test.trim());

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  /**
   * Metodo que se encarga de recopilar la informacion del
   * formulario y enviarlo a su respectivo servicio
   *
   */
  guardarDirectiva(): void {
    this.seccionDosForm.controls['direccion'].setValue(this.previsualizacion.getRawValue());
    const usuarioDirectiva = {
      ...this.seccionUnoForm.getRawValue(),
      ...this.seccionDosForm.getRawValue(),
    };
    this._directiva22Service.actualizarDirectiva22(usuarioDirectiva)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (respuesta) => {
          this.matDialogRef.close({ isError: false, respuesta });
        }, error: (err) => {
          this.matDialogRef.close({ isError: true, error: err.error });
        }
      });
  }

  /**
   * Trae listado de datos de maestros
   */
  async getMaestros(): Promise<void> {
    await this._directiva22Service.obtenerPaises().toPromise().then(response => this.paises = response);
    await this._directiva22Service.obtenerDepartamentos().toPromise().then(response => (this.departamentos = response));
    this.seccionUnoForm.controls['Departamento'].enable();
    this.seccionUnoForm.controls['Departamento'].setValidators(Validators.required);
    this.seccionUnoForm.controls['Departamento'].updateValueAndValidity();
    this.loading = false;
    await this._directiva22Service.obtenerLocalidades().toPromise().then(response => (this.localidades = response));
    await this._directiva22Service.obtenerNomenclaturas().toPromise().then(response => (this.nomenclaturas = response));
    await this._directiva22Service.obtenerZonas().toPromise().then(response => (this.zonas = response));
    await this._directiva22Service.obtenerMotivosActualizacion().toPromise().then(response => (this.motivos = response));
    await this._directiva22Service.obtenerTiposVia().toPromise().then(response => (this.tiposVia = response));
    await this._directiva22Service.obtenerLetras().toPromise().then(response => (this.letras = response));
    await this._directiva22Service.obtenerCuadrantes().toPromise().then(response => (this.cuadrantes = response));
    await this._directiva22Service.obtenerEstratos().toPromise().then(response => (this.estratos = response));
  }

  private _deshabilitarCampos(): void {
    this.seccionUnoForm.controls['Departamento'].disable();
    this.seccionUnoForm.controls['Ciudad'].disable();
    this.seccionUnoForm.controls['Barrio'].disable();
    this.seccionUnoForm.controls['Localidad'].disable();
    this.seccionUnoForm.controls['Nomenclatura'].disable();
  }

}

