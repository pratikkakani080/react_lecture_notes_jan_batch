import { useState } from "react";
import Button from "../../components/button"
import { toast } from "react-toastify";

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
    const [errors, setErrors] = useState<any>({})

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

    console.log(userInfo);
    const handleSubmit = () => {
        // localStorage.setItem('userName', userName)
        // localStorage.setItem('email', email)
        // localStorage.setItem('phone', phone)
        // sessionStorage.setItem('userName', userName)
       if (validate()) {
           localStorage.setItem('userInfo', JSON.stringify(userInfo))
           toast.success('Your data is saved with us')
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
                onChange={handleChange}
            />
            <label htmlFor="email">
                Email <span style={{ color: 'red'}}>*</span>
                {errors.email && <span style={{ color: 'red'}}>{errors.email}</span>}
            </label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                />
            <label htmlFor="phone">
                Phone <span style={{ color: 'red'}}>*</span>
                {errors.phone && <span style={{ color: 'red'}}>{errors.phone}</span>}
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