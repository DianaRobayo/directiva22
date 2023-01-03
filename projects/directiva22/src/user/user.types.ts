/* eslint-disable @typescript-eslint/naming-convention */
import { FuseNavigationItem } from '@fuse/components/navigation';

export interface User
{
    id: string;
    primerNombre: string;
    nombres: string;
    email: string;
    imagen?: string;
    celular?: string | number;
    rol?: Rol;
    directiva22?: boolean;
    userKey: string;
    validacionPlena?: boolean;
    elementosRestringidos?: any[];
    tipoIdentificacion?: string;
    numIdentificacion?: string;
    codTipoIdentificacion?: string;
}

export interface Rol {
    idRol: number;
    nombreRol: string;
    modulos: FuseNavigationItem[];
    descripcionRol: string;
}

export interface RespuestaConfigRol {
    idRol: number;
    nombreRol: string;
    celular?: string | number;
    modulos: FuseNavigationItem[];
    descripcionRol: string;
    directiva22?: boolean;
    validacionPlena?: boolean;
    imagen?: string;
    nombres: string;
    primerNombre: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    abreviaturaTipoIdentificacion?: string;
    email: string;
}
