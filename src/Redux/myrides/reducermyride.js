import { ADD_MYRIDES, BIKE_TAG_ADD, BIKE_TAG_CLEAR, BIKE_TAG_REMOVE, ERROR_MYRIDES, LOCATION_TAG_ADD, LOCATION_TAG_CLEAR, LOCATION_TAG_REMOVE, REQUEST_MYRIDES, STATUS_ALL, STATUS_CANCEL, STATUS_COMPLETE, STATUS_PENDING } from "./actiontype"

const initState=
    {
        'vehicles' : [],
        'loading' : false,
        'error':false,
        'locationTags': [],
        'bikeTags': [],
        'fstatus':[]
    }

export const myRideReducer=(state=initState,action)=>{
        
    if(action.type===REQUEST_MYRIDES){
        return {
            ...state,loading:true
        }
    }
    else if(action.type===ADD_MYRIDES){
        return{
            ...state,vehicles:action.payload,loading:false
        }
    }else if(action.type===ERROR_MYRIDES){
        return{
            ...state,error:true
        }
    }
    
    
    else if(action.type===LOCATION_TAG_ADD){
        return{
            ...state,locationTags:[...state.locationTags,action.payload]
        }
    }
    else if(action.type===LOCATION_TAG_REMOVE){
        return {
            ...state,
            locationTags: state.locationTags.filter((ele) => ele !== action.payload),
          };
    }else if(action.type===LOCATION_TAG_CLEAR){
        return {
            ...state,
            locationTags: [],
          };
    }



    else if(action.type===BIKE_TAG_ADD){
        return {
            ...state,
            bikeTags: [...state.bikeTags, action.payload],
          };
    }
    else if(action.type===BIKE_TAG_REMOVE){
        return {
            ...state,
            bikeTags: state.bikeTags.filter((ele) => ele !== action.payload),
          };
    }
    else if(action.type===BIKE_TAG_CLEAR){
        return {
            ...state,
            bikeTags: [],
          };
    }

    else if(action.type===STATUS_ALL){
        return{
            ...state,
            fstatus:[]
        }
    }
    else if(action.type===STATUS_CANCEL){
        return{
            ...state,
            fstatus:['cancel']
        }
    }
    else if(action.type===STATUS_COMPLETE){
        return{
            ...state,
            fstatus:['booked']
        }
    }
    else if(action.type===STATUS_PENDING){
        return{
            ...state,
            fstatus:['pending']
        }
    }


    return state
}