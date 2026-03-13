import React, { useEffect } from 'react'
import SubChild1 from './subChild1'

function Child1({setC1}) {
    var c1 = 'I m child 1'
    useEffect(() => {
      setC1(c1)
    }, [])
    
  return (
    <div><SubChild1/></div>
  )
}

export default Child1