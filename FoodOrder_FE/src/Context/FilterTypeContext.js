import {FilterType} from '../Components/HomeScreen/HomeCommon'
import { createContext } from 'react';

export const filterTypeContext = createContext();

const FilterTypeReducer = (current, action) => {
    switch (action.type) {
        case 'set':
            return action.payload;
        case "unset":
            return FilterType.NONE;
    }

    return current;
}

export default FilterTypeReducer;