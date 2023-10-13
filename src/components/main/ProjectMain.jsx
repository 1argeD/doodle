import React,{useEffect, useState } from "react";
import LogOutMain from "./LogoutMain";
import LoginMain from "./LoginMain";


function ProjectButton() {
    const [token, setToken] = useState(null);

    console.log("토큰 값 확인 : ",token);

    useEffect(()=> {
         setToken(localStorage.getItem('access-token'));
    },[token]) 

 
    let status;

    if(!token) {
        status = <LogOutMain/>
    } else {
        status = (
            <>
            <LoginMain />
        </>
        )
        
    }

    return(<>
        {status}
    </>) 
}

export default ProjectButton;