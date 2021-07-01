import { ADD_TO_FAVORI, REMOVE_FROM_FAVORI } from '../actions/favoriActions';
import {favoriItems} from '../initialValues/favoriItem'

const initialState={
 favoriItems:favoriItems
};

export default function favoriReducer(state=initialState,{type,payload}){

    switch(type){

        case ADD_TO_FAVORI:

            let jobNotice=state.favoriItems.find((j)=>j.jobNotice.id===payload.id)
            
            if(jobNotice){
                return{
                    ...state
                };
            }
                else{
                    return{
                        ...state,
                        favoriItems:[...state.favoriItems,{jobNotice:payload}]

                    };
                }
                case REMOVE_FROM_FAVORI:
                    return{
                        ...state,
                        favoriItems:state.favoriItems.filter((j)=>j.jobNotice.id!==payload.id)
                    };
                    default:
                        return state;
            }
    }
