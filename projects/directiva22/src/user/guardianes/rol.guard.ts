import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from 'app/core/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class RolGuard implements CanActivate
{
    /**
     * Constructor
     */
    constructor(
        private _userService: UserService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        return this._check(route.data?.rolesPermitidos);
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @private
     */
    private _check(rolesPermitidos: number[] = []): Observable<boolean>
    {
        // TODO Guard que verifique si la data de la ruta incluye el id de rol autorizado
        // Tener en cuenta que el guard de esta activando antes de la obtención de datos del usuario
        // Lo que ocasiona que al recargar la pagina el guard verifique y no encuentre información
        return of(true);
    }
}
