import { createContext } from 'react';

export const orderFormIDContext = createContext();

//payload:{id:1, itemType:'DISH'}
const OrderFormIDReducer = (current, action) => {
    switch(action.type){
        case 'set':
            return action.payload;
    }
    return current
}

export default OrderFormIDReducer;