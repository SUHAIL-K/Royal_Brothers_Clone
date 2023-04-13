import React from 'react'

//It's just for demo

let initialState = {
    count:0
}

export default function initialReducer(state=initialState,{type,action}) {
    switch(type){
        default:
            return state;
    }
  
}
