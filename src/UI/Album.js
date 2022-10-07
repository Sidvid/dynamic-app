import React, { useEffect } from 'react'
import useServer from '../utils/customHooks/useServer'
import { postsAxios } from '../services/API/axiosCall';
import { useAuth } from '../utils/useContext/AuthProvider';

function Album() {
    const {state , dispatch}=useAuth()
    const allPosts=useServer(()=>postsAxios("data"))
    console.log({state,dispatch,allPosts});
 
    useEffect(()=>{
        console.log("allPosts",allPosts);
        let data=allPosts?.data
            dispatch({...state ,albumData:data})
    },[allPosts.data])
    
  return (
    <div>Album</div>
  )
}

export default Album