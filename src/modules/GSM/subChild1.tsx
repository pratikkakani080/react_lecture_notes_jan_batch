import  { useContext } from 'react'
import MyContext from '../../config/myContext';

function SubChild1() {
      const data = useContext(MyContext)
    console.log(data.isCheck, 'data');
  return (
    <div>SubChild1 ======= {data.isCheck ? 'true' : 'false'}</div>
  )
}

export default SubChild1