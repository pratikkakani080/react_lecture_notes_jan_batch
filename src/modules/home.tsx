import { useEffect, useState } from "react";
import Button from "../components/button";
import { Link } from "react-router";

export default function Home () {
    const [data, setData] = useState({name: 'default'})
    const [state, setState] = useState(true)
    const [todos, setTodos] = useState([])
    // console.log(state);
    // console.log('rendering');
    let aaaa=  'test'

    console.log(todos);
    
    useEffect(() => {
        console.log('running on mounting');

        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
        
        return () => {
            console.log('running on un - mounting');
        }
    }, [state])
    
    return (
        <>
        <Link to={'/blog'} >to Blog page</Link>
            <Button 
                buttonText={"Click me"} 
                onClick={() => {
                    aaaa = 'changed'
                    setData({name: 'updated'})
                    console.log(aaaa);
                    
                }}
            />
            {aaaa}
            {data.name}
            <Button buttonText={'Toggle'} onClick={() => setState(!state)} data={data} />
                {todos.map(el => {
                    return (
                        <>
                        <span>{el.id} - {el.title}</span><br/>
                    </>)
                })}
        </>
    )
}