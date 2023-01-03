/* eslint-disable @typescript-eslint/naming-convention */
export interface Ipais {
  idPais: string;
  pais: string;
}

export interface Idepartamento {
  idDepartamento: string;
  nombreDepartamento: string;
}

export interface Iciudad {
  idMunicipio?: string;
  nombreMunicipio?: string;
  idCiudad?: string;
  ciudad?: string;
}

export interface Ilocalidad {
  idLocalidad: string;
  localidad: string;
}

export interface Iestrato {
  codEstrato: string;
  idEstrato: string;
  nombreEstrato: string;
}

export interface Izona {
  idZona: string;
  nombreZona: string;
}

export interface Inomenclatura {
  idNomenclatura: string;
  nombreNomenclatura: string;
}

export interface Ibarrio {
  idBarrio: string;
  nombreBarrio: string;
}

export interface ImotivoActualizacion {
  idMotivoDir22: string;
  codMotivoDir22: string;
}

export interface ItipoVia {
  idVia: string;
  descripcionVia: string;
  codVia: string;
}

export interface Iletra {
  idLetraVia: string;
  letraVia: string;
}

export interface Icuadrante {
  idCuadrante: string;
  codCuadrante: string;
  nombreCuadrante: string;
}

export interface IubicacionUsuario {
  Pais: string;
  Departmento: string;
  Ciudad: string;
  Zona: string;
  Nomenclatura: string;
  Localidad: string;
  Barrio: string;
  ViaPrincipal: string;
  NumeroDeViaPrincipal: number;
  NombreDeViaPrincipal: string;
  SinonimoDeViaPrincipal: string;
  LetraDeViaPrincipal: string;
  BisDeViaPrincipal: boolean;
  LetraDeBisDeViaPrincipal: string;
  CuadranteDeViaPrincipal: string;
  NumeroDeViaGeneradora: number;
  LetraDeViaGeneradora: string;
  NumeroDePlaca: number;
  CuadranteDeViaGeneradora: string;
  Estrato: string;
  Complemento: string;
  MotivoDeLaActualizacion: string;
  user: string;
}
