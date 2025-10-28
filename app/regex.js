"use client"

import { useState } from 'react'

export default function Regex() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const handlePasswordChange = e => setPassword(e.target.value)
    const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value)
    const handleEnterToValidate = e => { if (e.key === 'Enter') validate() }

    const validatePswd = () => {
        const pswdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){8,}/

        if (!pswdRegex.test(password)) {
            setMessage("Password must be at least 8 characters long and include uppercase, lowercase, number and special charactes.")
        }
        else if (password !== confirmPassword) {
            setMessage("Passwords do not match")
        }
        else {
            setMessage("Password is valid and confirmed")
            setPassword("")
            setConfirmPassword("")
        }
        setTimeout(() => {
            setMessage("")
        }, 3000)
    }
    const clearField = () => {
        setPassword("")
        setConfirmPassword("")
        setMessage("")
    }
    return (
        <div>
            <h1>Regex</h1>
            {message && <p>{message}</p>}
            <input type="text" placeholder='Type a password' value={password} onChange={handlePasswordChange} />
            <div className='validate'>
                <input type="text" placeholder='Confirm password' value={confirmPassword} onChange={handleConfirmPasswordChange} onKeyDown={handleConfirmPasswordChange} />
                <button onClick={validatePswd}>Validate</button>
                <button onClick={clearField}>Clear filed</button>
            </div>
        </div>
    )
}