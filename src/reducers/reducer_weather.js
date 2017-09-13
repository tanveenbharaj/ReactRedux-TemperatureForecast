import {FETCH_WEATHER} from "../actions/index";

//state is not null but array because we will have multiple row data
export default function(state=[],action){
    //console.log("action recieved",action);
    switch(action.type){
        case 'FETCH_WEATHER':
            //collecting cities data over time
            //redux states are not manupilated by assignment
            //therefore we returning new instance of state by concat
            return state.concat([action.payload.data]);
    }
    return state;
}