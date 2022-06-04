import { createContext, useReducer } from "react";
import { useContext } from "react/cjs/react.production.min";
import { useProductContext } from "./product_context";


const FilterContext = createContext();

function FilterContextProvider({children}){
 
    const [state,dispatch] = useReducer(filterReducer, {
        category,
        sortBy,
        showFastDelivery,
        includeOutOfStock,
        rating
    })


    return <FilterContext.Provider value={[state,dispatch]}>
        {children}
    </FilterContext.Provider>


}

const useFilter = () =>  useContext(FilterContext);


export {FilterContextProvider, FilterContext};