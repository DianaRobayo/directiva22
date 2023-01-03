import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, forkJoin, map, Observable, tap } from 'rxjs';
import { IubicacionUsuario } from './directiva22.types';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class Directiva22Service {

  apimUrlDirectiva22 = environment.apimUrlBase + environment.apimUrlModulos.directiva22;
  apimDirectiva22Header: HttpHeaders;
  apimUrlmdmPaises = environment.apimUrlBase + environment.apimUrlmdm.paises;
  apimUrlmdmDivisionPoblacional = environment.apimUrlBase + environment.apimUrlmdm.divisionPoblacional;
  apimUrlmdmZonas = environment.apimUrlBase + environment.apimUrlmdm.zonas;
  apimUrlmdmNomenclaturas = environment.apimUrlBase + environment.apimUrlmdm.nomenclaturas;
  apimUrlmdmLocalidadesYBarrios = environment.apimUrlBase + environment.apimUrlmdm.localidadesYBarrios;
  apimUrlmdmMotivosActualizacion = environment.apimUrlBase + environment.apimUrlmdm.motivosActualizacion;
  apimUrlmdmTiposVia = environment.apimUrlBase + environment.apimUrlmdm.tiposVia;
  apimUrlmdmLetras = environment.apimUrlBase + environment.apimUrlmdm.letras;
  apimUrlmdmCuadrantes = environment.apimUrlBase + environment.apimUrlmdm.cuadrantes;
  apimUrlmdmEstratos = environment.apimUrlBase + environment.apimUrlmdm.estratos;
  apimUrlmdmCiudadExtranjera = environment.apimUrlBase + environment.apimUrlmdm.ciudadesExtranjeras;
  apimMDMHeader: HttpHeaders;


  constructor(private _httpClient: HttpClient) {
    this.apimDirectiva22Header = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Ocp-Apim-Subscription-Key':
        environment.apimSubscriptionsKeys.directiva22,
    });

    this.apimMDMHeader = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Ocp-Apim-Subscription-Key':
        environment.apimSubscriptionsKeys.maestros,
    });
  }

  obtenerMaestros(): Observable<any> {
    return forkJoin([
      this.obtenerPaises(),
      this.obtenerDepartamentos(),
      this.obtenerZonas(),
      this.obtenerNomenclaturas(),
      this.obtenerLocalidades(),
      this.obtenerMotivosActualizacion(),
      this.obtenerTiposVia(),
      this.obtenerLetras(),
      this.obtenerCuadrantes(),
      this.obtenerEstratos()
    ]);
  }

  obtenerPaises(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmPaises}Paises`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerDepartamentos(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmDivisionPoblacional}Departamento`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerCiudades(idDepartamento?: string): Observable<any> {
    let urlFinal = 'Municipio';
    if (idDepartamento) {
      urlFinal = `MunicipioDepartamento/${idDepartamento}`;
    }
    return this._httpClient.get(`${this.apimUrlmdmDivisionPoblacional}${urlFinal}`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerZonas(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmZonas}Zona`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerNomenclaturas(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmNomenclaturas}Nomenclatura`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerLocalidades(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmLocalidadesYBarrios}Localidades`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerBarrios(idLocalidad?: string): Observable<any> {
    let urlFinal = 'Barrios';
    if (idLocalidad) {
      urlFinal = `BarrioLocalidad/${idLocalidad}`;
    }
    return this._httpClient.get(`${this.apimUrlmdmLocalidadesYBarrios}${urlFinal}`, {
      headers: this.apimMDMHeader
    });
  }

  actualizarDirectiva22(informacionD22: IubicacionUsuario): Observable<any> {
    return this._httpClient.post(`${this.apimUrlDirectiva22}Directiva22`, informacionD22, {
      headers: this.apimDirectiva22Header
    }).pipe(
      map(res => res)
    );
  }

  obtenerMotivosActualizacion(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmMotivosActualizacion}MotivoDir22`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerLetras(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmLetras}LetraVia`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerTiposVia(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmTiposVia}Via`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerCuadrantes(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmCuadrantes}Cuadrante`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerEstratos(): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmEstratos}Estrato`, {
      headers: this.apimMDMHeader
    });
  }

  obtenerCiudadesExtranjeras(idPaises?: string): Observable<any> {
    return this._httpClient.get(`${this.apimUrlmdmCiudadExtranjera}Ciudad/${idPaises}`, {
      headers: this.apimMDMHeader
    });
  }
}
