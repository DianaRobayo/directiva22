/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, ReplaySubject, of, switchMap, tap } from 'rxjs';
import { User, Rol, RespuestaConfigRol } from 'app/core/user/user.types';
import { environment } from 'environments/environment';
import { MsalService } from '@azure/msal-angular';
import { NavigationService } from 'app/core/navigation/navigation.service';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _apimUrlUsuarioInfo =
        environment.apimUrlBase + environment.apimUrlModulos.usuarioInfo;
    private _apiHeaderEnrolamiento: HttpHeaders;
    private _apiHeaderPerfil: HttpHeaders;
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _authServiceAzure: MsalService,
        private _navigationService: NavigationService
    ) {
        this._apiHeaderEnrolamiento = new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Ocp-Apim-Subscription-Key':
                environment.apimSubscriptionsKeys.enrolamiento,
        });
        this._apiHeaderPerfil = new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Ocp-Apim-Subscription-Key':
                environment.apimSubscriptionsKeys.perfiles,
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */

    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    set user(value: User) {
        // Store the value
        this._user.next(value);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable<User> {
        const userAzure = this._authServiceAzure.instance.getActiveAccount();
        console.log('Usuario cuenta activa ====> ', userAzure);
        const userKey = userAzure.idTokenClaims.extension_user as string;

        return this.obtenerConfiguracionRol(userKey).pipe(
            switchMap((configRol: RespuestaConfigRol) =>
                this._navigationService.get(configRol.modulos).pipe(
                    switchMap(() => {
                            const user: User = {
                                id: userAzure.localAccountId,
                                celular: configRol.celular || null,
                                nombres: configRol.nombres,
                                primerNombre: configRol.primerNombre,
                                email: configRol.email,
                                imagen: (configRol?.imagen && configRol?.imagen !== 'null' )
                                ? `data:image/jpeg;base64,${configRol.imagen}`
                                : 'assets/images/avatars/male-07.jpg',
                                userKey: userKey,
                            };
                            user.validacionPlena = configRol.validacionPlena;
                            user.directiva22 = configRol.directiva22;

                            const rol: Rol = {
                                idRol: configRol.idRol,
                                nombreRol: configRol.nombreRol,
                                modulos: configRol.modulos,
                                descripcionRol: configRol.descripcionRol,
                            };
                            user.rol = rol;
                            user.tipoIdentificacion = configRol.tipoIdentificacion;
                            user.numIdentificacion = configRol.numeroIdentificacion;
                            user.codTipoIdentificacion = configRol.abreviaturaTipoIdentificacion;

                            console.log(
                                'Repuesta del obtener config por rol ====> ',
                                configRol
                            );

                            this._user.next(user);
                            return of(user);
                    })
                )
            )
        );
    }

    obtenerConfiguracionRol(userKey: string): Observable<any> {
        return this._httpClient
            .get(`${this._apimUrlUsuarioInfo}Modulos/${userKey}`, {
                headers: this._apiHeaderEnrolamiento,
            })
            .pipe(map(response => response));
    }

    verificarFlagsUsuario(): Observable<boolean> {
        const userAzure = this._authServiceAzure.instance.getActiveAccount();
        return this.obtenerConfiguracionRol(
            userAzure.idTokenClaims.extension_user as string
        ).pipe(
            map((res: RespuestaConfigRol) => {
                const userFlags = {
                    directiva22: res.directiva22,
                    validacionPlena: res.validacionPlena ? true : false,
                };

                if (userFlags.directiva22 && userFlags.validacionPlena) {
                    return true;
                }
                return false;
            })
        );
    }
}
