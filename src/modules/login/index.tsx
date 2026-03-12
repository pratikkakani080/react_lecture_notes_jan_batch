import { useEffect, useState } from "react";
import Button from "../../components/button"
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const initialState = {
    email: '',
    password: ''
}

function Login() {
    const navigate = useNavigate()
    const loggedInEmail = localStorage.getItem('loggedInEmail')

    useEffect(() => {
        if (loggedInEmail) {
            navigate('/')
        }

    }, [loggedInEmail])

    const [userInfo, setUserInfo] = useState(initialState)
    const [errors, setErrors] = useState<any>({})

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setUserInfo({ ...userInfo, [name]: value })
        setErrors({ ...errors, [name]: '' })
    }

    const validate = () => {
        let err: any = {}
        let formIsValid = true
        if (!userInfo.email) {
            err.email = 'please provide email'
            formIsValid = false
        }
        if (!userInfo.password) {
            err.password = 'please provide password'
            formIsValid = false
        }
        setErrors(err)
        return formIsValid
    }

    const handleSubmit = () => {
        if (validate()) {
            const storedUsers = JSON.parse(localStorage.getItem('userInfo') || '[]')
            const currentUser = storedUsers.find((el: any) => (el.email === userInfo.email) && (el.password === userInfo.password))
            if (currentUser) {
                localStorage.setItem('loggedInEmail', currentUser.email)
                toast.success('Successfully logged in')
                setUserInfo(initialState)
                navigate('/')
            } else {
                toast.error('User not found')
            }
        } else {
            toast.error('Please fill out the required fields')
        }
    }

    return (
        <div>
            <label htmlFor="email">
                Email <span style={{ color: 'red' }}>*</span>
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </label>
            <input
                id="email"
                name="email"
                type="email"
                value={userInfo.email}
                onChange={handleChange}
            /><br />

            <label htmlFor="password">
                Password <span style={{ color: 'red' }}>*</span>
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </label>
            <input
                id="password"
                name="password"
                type="password"
                value={userInfo.password}
                onChange={handleChange}
            /><br />
            <Button buttonText={'Submit'} onClick={handleSubmit} />
        </div>
    )
}

export default Login