import { useEffect, useState } from 'react'
import Button from '../../components/button'
import { useNavigate } from 'react-router'

function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('userInfo') ?? '[]')
        setUsers(storedUsers)
    }, [])
    
    const handleDelete = (userId: string) => {
        const res = window.confirm('Are you sure you want to delete this user?')
        if (res) {
            const storedUsers = JSON.parse(localStorage.getItem('userInfo') ?? '[]')
            const updatedList = storedUsers.filter((el: any) => el._id !== userId)
            localStorage.setItem('userInfo', JSON.stringify(updatedList))
            setUsers(updatedList)
        }
    }

    return (
        <table>
            <tr>
                <th>User name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
            {users.length > 0 ?
                users.map((el: any) => {
                    return (
                        <tr>
                            <td>{el.userName}</td>
                            <td>{el.email}</td>
                            <td>{el.phone}</td>
                            <td><Button buttonText='Edit' onClick={() => navigate(`/register?id=${el._id}`)} /></td>
                            <td><Button buttonText='Delete' onClick={() => handleDelete(el._id)} /></td>
                        </tr>
                    )
                }) : 'no users added'
            }

        </table>
    )
}

export default Users