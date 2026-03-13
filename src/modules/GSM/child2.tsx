import React from 'react'
import SubChild2 from './subChild2'

function Child2({C1}) {
    console.log('console from c2', C1)
  return (
    <div><SubChild2/></div>
  )
}

export default Child2