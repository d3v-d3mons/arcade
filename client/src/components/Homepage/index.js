import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

export default function Homepage () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [formState, setFormState] = useState({ firstName: '', lastName: '', nickname: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
    // create error handling and display errors on the front end later

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    const handleNewUserForm = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            console.log('not valid email')
            // add error display later
        }

        if (!firstName || !lastName || !nickname || !email || !password) {
            console.log('all fields are required bud');
            // add error display later
            return;
        }
        const mutationResponse = await addUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                nickname: nickname,
                email: email,
                password: password,
            },
        });
        const token = mutationResponse.data.addUser.token;
        auth.login(token);
    }

    return (
        <div className='formContainer'>
            <form onSubmit={handleNewUserForm}>
                <input value={firstName} onChange={setFirstName} className='firstName' placeholder='enter your first name'></input>
                <input value={lastName} onChange={setLastName} className='lastName' placeholder='enter your last name'></input>
                <input value={nickname} onChange={setNickname} className='nickname' placeholder='enter a nickname'></input>
                <input value={email} onChange={setEmail} className='email' placeholder='enter your email here'></input>
                <input value={password} onChange={setPassword} className='password' placeholder='enter your password here'></input>
                <button className='submitbtn' type='submit'></button>
            </form>
        </div>
    )
};