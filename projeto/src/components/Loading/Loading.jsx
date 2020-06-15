import LoadSvg from './Ball.svg'
import React from 'react'
import 'Loading.ts'
const Loading = () => { 
    return (
      <div className = "Load">
        <img src = {LoadSvg} />
      </div>  
    )
}
export default Loading