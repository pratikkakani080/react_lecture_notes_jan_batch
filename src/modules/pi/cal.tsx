import { useCallback, useMemo, useState } from 'react';
import ExpCal from './expCal';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrementByAmount, incrementValue } from '../../config/reducers/counterSlice';
import { fetchUserById } from '../../config/actions/apis';


const Cal = () => {
    const counterValue = useSelector(state => state.counter.value)
    const products = useSelector(state => state.counter.entities)
    const dispatch = useDispatch()
    console.log(products);

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState(0)

    const calculation = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, [count])

    const addTodo = () => {
        const newArr: any = [...todos, 'New Todo']
        setTodos(newArr);
    };

    return (
        <div>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch(incrementValue())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(input))}>Increment by {input}</button>
            <button onClick={() => dispatch(fetchUserById())}>Fetch Products</button>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <ExpCal {...{ count, calculation, increment }} />
        </div>
    );
};

export default Cal

const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};
