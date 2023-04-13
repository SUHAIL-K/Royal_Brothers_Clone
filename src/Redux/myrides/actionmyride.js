import { ADD_MYRIDES, ERROR_MYRIDES, REQUEST_MYRIDES } from "./actiontype"
import axios from 'axios'


const handleLoading=()=>{
    return{type:REQUEST_MYRIDES}
}

const handleError=()=>{
    return {type:ERROR_MYRIDES}
}

const handleSave=(data)=>{
        return{
            type:ADD_MYRIDES,
            payload:data
        }
}

export const getMyRide=(params={})=>(dispatch)=>{
    dispatch(handleLoading())
    axios.get(`https://royalapi-kq51.onrender.com/history`,params)
    .then(res=>{
        dispatch(handleSave(res.data))
      //  console.log(res.data)
    })
    .catch(res=>{
        dispatch(handleError())
    })
}
