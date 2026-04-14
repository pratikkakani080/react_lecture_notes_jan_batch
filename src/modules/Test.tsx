import { useReducer, useRef, useState } from 'react'

const initialValues: any = {
    count: 0,
    str: ''
}

function reducer(state: any, action: any) {
    if (action.type === 'increment') {
        state.count += 1
        return state
    }
    if (action.type === 'change_string') {
        state.str = action.payload
        return state
    }
    throw Error('Unknown action.');
}

function Test() {
    const [states, dispatch] = useReducer(reducer, initialValues)
    const ref = useRef(null)
    const countRef = useRef(0)
    const [first, setfirst] = useState(0)

    const handleClick = () => {
        console.log(ref.current);
        const element = ref.current
        if (element) {
            element.style.backgroundColor = 'red'
        }
        countRef.current = first
        setfirst(first + 1)
    }

    return (
        <div>
            <span ref={ref}>this is test string</span>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                dispatch({ type: 'increment' })
            }}>Click me</button>
            <input type="text" name="str" id="str" onChange={(e) => {
                dispatch({ type: 'change_string', payload: e.target.value })
            }} />
        </div>
    )
}

export default Test