const userDetails = {
    name:"",
    email:"",
    phone:"",
    password:"",
    isLoggedIn:false,
}

const Login_Singup_Reducer = (state={userDetails},action) =>{
    if(action.type === "SIGNUP"){
        return{
            ...state,
            name:action.payload.name,
            email:action.payload.email,
            phone:action.payload.phone,
            password:action.payload.password
        }
    }else if(action.type === "ISLOGGEDIN"){
        return{
            ...state,
            isLoggedIn:action.payload
        }
    }else if(action.type === "LOGOUT"){
        return{
            ...state,
            name:"",
            email:"",
            phone:"",
            password:"",
            isLoggedIn:action.payload
        }
    }


    return state;
}
export default Login_Singup_Reducer;