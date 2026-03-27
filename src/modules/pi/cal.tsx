import { useCallback, useMemo, useState } from 'react';
import ExpCal from './expCal';


const Cal = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

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
