import { Action } from '@ngrx/store'

export const ACTIVAR_LOADING = "Loading..."
export const DESACTIVAR_LOADING = 'Completed...'

export class ActivarLoadingAction implements Action {
    readonly type = ACTIVAR_LOADING;

}

export class DesactivarLoadingAction implements Action {
    readonly type = DESACTIVAR_LOADING;

}

//Pasar las acciones al reducer
export type acciones = ActivarLoadingAction | DesactivarLoadingAction;
