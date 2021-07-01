export const ADD_TO_FAVORI="ADD_TO_FAVORI"
export const REMOVE_FROM_FAVORI="REMOVE_FROM_FAVORI"

export function addToFavori(jobNotice){
    return{
        type:ADD_TO_FAVORI,
        payload:jobNotice
    }
}    
export function removeFromFavori(jobNotice){
    return{
        type:REMOVE_FROM_FAVORI,
        payload:jobNotice
      }
}