import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'app/core/user/user.service';

export interface OnExit {
    onExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: 'root'
})
export class SalidaInicioGuard implements CanDeactivate<unknown>
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
    canDeactivate(
        component: OnExit,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean
    {
        // Se verifica si se quiere deslogear, en este caso si se debe dejar
        if(nextState.url === '/sign-out') {
            return true;
        }else {
            return component.onExit ? component.onExit() : true;
        }
    }

}
