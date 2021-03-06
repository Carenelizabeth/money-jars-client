import * as actionTypes from '../actions/index.actions';

const initialState = {
    loading: false,
    error: false,
    data: null,
    balance: null,
    toBudget: null,
}

export default function ynab(state=initialState, action){
    switch(action.type){
        case actionTypes.FETCH_YNAB_BUDGETS_REQUEST_SUCCESS: {
            return {
                ...state,
                data: action.response,
                error: false,
                loading: false,
            }
        }
        case actionTypes.FETCH_YNAB_BUDGETS_REQUEST_FAILURE: {
            return {
                ...state,
                error: true,
                loading: false,
            }
        }
        case actionTypes.FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED: {
            return {
                ...state,
                error: false,
                loading: true,
            }
        }
        case actionTypes.FETCH_YNAB_CATEGORIES_REQUEST_SUCCESS: {
            return{
                ...state,
                data: action.response,
                error: false,
                loading: false,
            }
        }
        default: {
            return state;
        }
    }
}