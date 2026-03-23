import { useContext } from 'react'
import Button from '../../components/button'
import MyContext from '../../config/myContext';

function SubChild2() {
  const data = useContext(MyContext)

  return (
    <div>SubChild2
      <Button
        buttonText={'Trigger'}
        onClick={() => {
          data.setIsCheck(!data.isCheck)
        }} />
    </div>
  )
}

export default SubChild2