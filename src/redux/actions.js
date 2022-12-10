import { ADD_CHARACTER , DELETE_CHARACTER } from "./types";

export const addCharacter = (id) => {
    return {
        type: ADD_CHARACTER,
        payload: id,
    }
};
export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id,
    }
};
