import axios from 'axios'
import React, { useEffect } from 'react'
import { BASEURL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCards from './UserCards'

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store)=>store.feed)

  const getFeed = async()=>{
    if(feed) return
    try{
      const res = await axios.get(BASEURL + "/feed", {withCredentials:true})
      dispatch(addFeed(res.data))
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
   getFeed()
  },[])
 
  return feed && (
   <div className='flex justify-center my-10'><UserCards user={feed.data[0]}/></div>
  )
}

export default Feed