import React from 'react'
import {useDatabase} from './database'
import Comment from './Comment'

const Comments =() => {
    const data = useDatabase('comments')
    if (!data) {
      return <div className='container noComment'><p>Nenhum Comentário enviado até o momento</p></div>
    }
    const ids = Object.keys(data)
    if(ids.length === 0){
      return <div className='container noComment'><p>Carregando...</p></div>
    }
    return ids.map(id => {
      return  <div className ='container comments'><Comment key={id} comment={data[id]} /></div>
    })
  }

  export default Comments