import { Action } from '@ngrx/store';
import { IngresoEgreso } from './ingreso-egreso.model';

export const SET_TIMES = 'SET_TIMES';
export const UNSET_TIMES = 'UNSET_TIMES';

export class SetItemsAction implements Action {
    readonly type = SET_TIMES;

    constructor(public items: IngresoEgreso[]){}
}

export class UnSetItemsAction implements Action {
    readonly type = UNSET_TIMES;
    
}

export type acciones = SetItemsAction | UnSetItemsAction;