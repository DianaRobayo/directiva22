import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'app/core/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class ValidacionUsuarioGuard implements CanActivate
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
        if(state.url.includes('inicio')) {
            return true;
        }
        return this._userService.verificarFlagsUsuario();
    }

}
