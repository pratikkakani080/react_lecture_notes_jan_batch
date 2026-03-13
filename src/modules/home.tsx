import { useEffect, useState } from "react";
import Button from "../components/button";
import { Link, useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate()
    const loggedInEmail = localStorage.getItem('loggedInEmail')

    useEffect(() => {
        if (!loggedInEmail) {
            navigate('/login')
        }

    }, [loggedInEmail])
    const [data, setData] = useState({ name: 'default' })
    const [state, setState] = useState(true)
    const [todos, setTodos] = useState([])
    const [filteredData, setFilteredData]= useState([])
    // console.log(state);
    // console.log('rendering');
    let aaaa = 'test'

    console.log(todos);

    useEffect(() => {
        console.log('running on mounting');

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {setTodos(json); setFilteredData(json)})

        return () => {
            console.log('running on un - mounting');
        }
    }, [state])

    const handleSearch = (e) => {
        setFilteredData(todos.filter(el => el.title.includes(e.target.value))) 
    }

    return (
        <>
            <Link to={'/blog'} >to Blog page</Link>
            <input type="search"  onChange={handleSearch} />
            <Button
                buttonText={"Click me"}
                onClick={() => {
                    aaaa = 'changed'
                    setData({ name: 'updated' })
                    console.log(aaaa);

                }}
            />
            {aaaa}
            {data.name}
            <Button buttonText={'Toggle'} onClick={() => setState(!state)} data={data} />
            {filteredData.map(el => {
                return (
                    <>
                        <span>{el.id} - {el.title}</span><br />
                    </>)
            })}
        </>
    )
}