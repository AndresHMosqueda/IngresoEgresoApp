import * as fromAuthActions from './auth.actions';
import { User } from './user.model';

export interface AuthState {
    user: User
}

const initState: AuthState = {
    user: null
}

export function authReducer(state = initState, action: fromAuthActions.acciones): AuthState {

    switch (action.type) {
        case fromAuthActions.SET_USER:
            return {
                user: { ...action.user }
            }
        case fromAuthActions.UNSET_USER:
            return {
                user: null
            }
        default:
            return state
    }
}
