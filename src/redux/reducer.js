import { ADD_CHARACTER , DELETE_CHARACTER } from "./types";
const initialState= {
    myFavorites: [],

};

function reducer (state = initialState, action){
    switch (action.type){
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            } 

        case DELETE_CHARACTER:
            const filteredList = state.myFavorites.filter(fav => fav.id !== action.payload);
            return {
                ...state,
                myFavorites: filteredList,
            } 
                   

        default: return {...state}

    }

}

export default reducer;