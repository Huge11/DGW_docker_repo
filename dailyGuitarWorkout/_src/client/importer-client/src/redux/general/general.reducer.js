import { GeneralActionTypes } from './general.types';

const INITIAL_STATE = {
    sidenavOpen: true
}

const generalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GeneralActionTypes.TOGGLE_SIDE_NAV:
            return {
                ...state,
                sidenavOpen: !state.sidenavOpen
            };
        default:
            return state;
    }
}

export default generalReducer;