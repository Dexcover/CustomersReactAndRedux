import {handleActions} from 'redux-actions'

// const customers = handleAction('FETCH_CUSTOMERS', state => state);

export const customers = handleActions({
    ['FETCH_CUSTOMERS']: (state, action) => [ ...action.payload],
}, []);

