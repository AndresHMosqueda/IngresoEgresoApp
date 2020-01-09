import * as fromIngresoEgresoActions from './ingreso-egreso.actions';
import { IngresoEgreso } from './ingreso-egreso.model';
import { AppState } from 'src/app/app.reducer';

export interface IngresoEgresoState {
    items: IngresoEgreso[];
}

export interface AppState extends AppState {
    ingresoEgreso: IngresoEgresoState
}

const initState: IngresoEgresoState = {
    items: []
};

//Reducer
export function ingresoEgresoReducer(state = initState, action : fromIngresoEgresoActions.acciones): IngresoEgresoState {

    switch(action.type) {
        case fromIngresoEgresoActions.SET_TIMES: 
            return{
                items: [...action.items.map(item=>{
                    return {
                        ...item
                    }
                })]
            }
        case fromIngresoEgresoActions.UNSET_TIMES:
            return {
                items: []
            }
        default:
            return state;
    }
}

