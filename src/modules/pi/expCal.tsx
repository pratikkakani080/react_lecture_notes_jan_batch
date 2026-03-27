import { memo } from 'react'

function ExpCal({ count, increment, calculation }: any) {
    console.log('this is child comp');

    return (
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
            <p>Note that this example executes the expensive function also when you click on the Add Todo button.</p>
        </div>
    )
}

export default memo(ExpCal)