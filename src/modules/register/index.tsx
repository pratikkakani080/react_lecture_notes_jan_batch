import { useEffect, useState } from "react";
import Button from "../../components/button"
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useSearchParams } from "react-router";

const initialState = {
    userName: '',
    email: '',
    phone: '',
    password: ''
}

function Register() {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const userId = params.get('id')
    // const [userName, setUserName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    const [userInfo, setUserInfo] = useState(initialState)
    const [errors, setErrors] = useState<any>({})

    useEffect(() => {
        if (userId) {
            const storedUsers = JSON.parse(localStorage.getItem('userInfo') ?? '[]')
            setUserInfo(storedUsers.find((el: any) => el._id === userId))
        }
    }, [])

    const handleChange = (event: any) => {
        // console.log(userInfo, event.target.name, event.target.value);
        const { name, value, type, checked } = event.target
        setUserInfo({ ...userInfo, [name]: type === "checkbox" ? checked : value })
        setErrors({ ...errors, [name]: '' })
    }

    const validate = () => {
        let err: any = {}
        let formIsValid = true
        // if (Object.keys(userInfo).find(key => userInfo[key] === '')) {
        //     err[key] = `please provide ${key}`
        //     formIsValid = false
        // }
        if (!userInfo.email) {
            err.email = 'please provide email'
            formIsValid = false
        }
        if (!userInfo.phone) {
            err.phone = 'please provide phone'
            formIsValid = false
        }
        setErrors(err)
        return formIsValid
    }

    // console.log(userInfo);
    const handleSubmit = () => {
        // localStorage.setItem('userName', userName)
        // localStorage.setItem('email', email)
        // localStorage.setItem('phone', phone)
        // sessionStorage.setItem('userName', userName)
        if (validate()) {
            const storedUsers = JSON.parse(localStorage.getItem('userInfo') || '[]')
            if (userId) {
                // logic for update user
                const updatedList = storedUsers.map((el: any) => el._id === userId ? userInfo : el)
                localStorage.setItem('userInfo', JSON.stringify(updatedList))
                toast.success('User successfully updated')
                setUserInfo(initialState)
                navigate('/users')
            } else {
                // add user logic
                console.log(localStorage.getItem('userInfo'))
                // storedUsers.push(userInfo)
                let users = userInfo ? [...storedUsers, { ...userInfo, _id: uuidv4() }] : []
                localStorage.setItem('userInfo', JSON.stringify(users))
                toast.success('Your data is saved with us')
                setUserInfo(initialState)
            }
        } else {
            toast.error('Please fill out the required fields')
        }
    }

    return (
        <div>
            <label htmlFor="userName">
                User Name
            </label>
            <input
                id="userName"
                name="userName"
                type="text"
                value={userInfo.userName}
                onChange={handleChange}
            /><br />
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
            <label htmlFor="phone">
                Phone <span style={{ color: 'red' }}>*</span>
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
            </label>
            <input
                id="phone"
                name="phone"
                type="tel"
                value={userInfo.phone}
                onChange={handleChange}
            /><br />
            <label htmlFor="password">
                Password
            </label>
            <input
                id="password"
                name="password"
                type="password"
                value={userInfo.password}
                onChange={handleChange}
            /><br />
            <input type="checkbox" id="vehicle1" name="Bike" value="Bike" onChange={handleChange} />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="Car" value="Car" onChange={handleChange} />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="Boat" value="Boat" onChange={handleChange} />
            <label htmlFor="vehicle3"> I have a hiplicopter</label><br></br>
            <Button buttonText={userId ? 'Update' : 'Submit'} onClick={handleSubmit} />
        </div>
    )
}

export default Register