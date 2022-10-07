import React, { useEffect } from 'react'
import { commentsAxios } from '../services/API/axiosCall'
import useServer from '../utils/customHooks/useServer'
import { useAuth } from '../utils/useContext/AuthProvider'

function Comments() {
    const commentData=useServer(()=>commentsAxios())
    const {dispatch ,state} =useAuth();
    useEffect(()=>{
        let data=commentData?.data
        dispatch({...state , commentData: data})
    },[commentData.data])
  return (
    <div>Comments</div>
  )
}

export default Comments