import { useEffect, useState } from "react";
import Button from "../components/button";
import { Link, useNavigate } from "react-router";
import axios from "axios";

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
    const [todos] = useState([])
    const [filteredData, setFilteredData] = useState([])
    // console.log(state);
    // console.log('rendering');
    let aaaa = 'test'

    console.log(todos);

    useEffect(() => {
        console.log('running on mounting');

        // fetch approach to call API
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(json => {setTodos(json); setFilteredData(json)})

        // Axios approach to call API
        // axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
        //     console.log(res, 'res');
        //     setFilteredData(res.data)
        // }).catch()

        getData()


        return () => {
            console.log('running on un - mounting');
        }
    }, [state])

    const getData = async () => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
            headers: {
                Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'
            }
        })
        setFilteredData(res.data)
    }
    // axios.post('https://jsonplaceholder.typicode.com/todos', payload)
    // axios.put('https://jsonplaceholder.typicode.com/todos', payload)
    // axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')

    const handleSearch = (e: any) => {
        setFilteredData(todos.filter((el: any) => el.title.includes(e.target.value)))
    }

    return (
        <>
            <Link to={'/blog'} >to Blog page</Link>
            <input type="search" onChange={handleSearch} />
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
            {filteredData.map((el: any) => {
                return (
                    <>
                        <span>{el.id} - {el.title}</span><br />
                    </>)
            })}
        </>
    )
}