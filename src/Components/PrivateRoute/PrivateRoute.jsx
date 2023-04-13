import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate  } from 'react-router-dom';

export default function PrivateRoute({children}) {
  const islogin = useSelector((store)=>store.LoginSignupRed.isLoggedIn);
  console.log("inside private", islogin);
  // const location = useLocation()
  

  //<<<<<<<<< Trying redirecting to last path >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//<<<<<<<<< Ending Trying redirecting to last path >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if(!islogin) return <Navigate to='/login'/>
  return children
}

