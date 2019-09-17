import React from 'react'
import {useDatabase} from './database'
import Comment from './Comment'

const Comments =() => {
    const data = useDatabase('comments')
    if (!data) {
      return <p>Nenhum Comentário enviado até o momento</p>
    }
    const ids = Object.keys(data)
    if(ids.length == 0){
      return <p>Carregando...</p>
    }
    return ids.map(id => {
      return <div><Comment key={id} comment={data[id]} /></div>
    })
  }

  export default Comments