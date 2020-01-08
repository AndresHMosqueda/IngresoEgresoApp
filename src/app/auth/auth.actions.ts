import { Action } from '@ngrx/store';
import { User } from './user.model';

//Action
export const SET_USER = "SET_USER";
export const UNSET_USER = "UNSET_USER";

//Action creator
export class SetUserAction implements Action {
    // readonly basicamente lo que hace es que no podamos modificar esa variable
    //para asegurarnos que nunca sea modificada.
    readonly type = SET_USER;

    // Va a recibir 1 argumento
    constructor(public user: User) {}
}

export class UnsetUserAction implements Action {
    // readonly basicamente lo que hace es que no podamos modificar esa variable
    //para asegurarnos que nunca sea modificada.
    readonly type = UNSET_USER;

}

export type acciones = SetUserAction | UnsetUserAction;