import React, {useContext} from 'react'
import Time from './Time'
import { AuthContext } from './auth'

const Comment=({ comment }) =>{
  const auth = useContext(AuthContext)
    return (
      <div>
        <span className='comment-sp'>{comment.content}</span>
        <br />
        <span className='comment-info'>por {comment.user.name} em < Time timestamp={comment.createdAt} /></span> 
      </div>
    )
  }

export default Comment