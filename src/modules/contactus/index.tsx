import { useState } from "react";
import Button from "../../components/button"

const initialState = {
    userName: '',
    email: '',
    phone: ''
}

function ContactUs() {
    // const [userName, setUserName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    const [userInfo, setUserInfo] = useState(initialState)

    const handleChange = (event: any) => {
        // console.log(userInfo, event.target.name, event.target.value);
        const { name, value, type, checked } = event.target
        setUserInfo({ ...userInfo, [name]: type === "checkbox" ? checked : value })
    }

    console.log(userInfo);
    const handleSubmit = () => {
        // localStorage.setItem('userName', userName)
        // localStorage.setItem('email', email)
        // localStorage.setItem('phone', phone)
        // sessionStorage.setItem('userName', userName)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
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
                onChange={handleChange}
            />
            <label htmlFor="email">
                Email
            </label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
            />
            <label htmlFor="phone">
                Phone
            </label>
            <input
                id="phone"
                name="phone"
                type="tel"
                onChange={handleChange}
            />
            <input type="checkbox" id="vehicle1" name="Bike" value="Bike" onChange={handleChange} />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="Car" value="Car" onChange={handleChange} />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="Boat" value="Boat" onChange={handleChange} />
            <label htmlFor="vehicle3"> I have a boat</label><br></br>
            <Button buttonText={'Submit'} onClick={handleSubmit} />
        </div>
    )
}

export default ContactUs