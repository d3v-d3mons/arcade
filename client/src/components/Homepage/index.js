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
    const [addUser] = useMutation(ADD_USER);

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
        try {
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
    } catch (err) {
        console.error(err);
    }
    }

    return (
        <div className='formContainer'>
            <form onSubmit={handleNewUserForm}>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className='firstName' placeholder='enter your first name'></input>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastName" className='lastName' placeholder='enter your last name'></input>
                <input value={nickname} onChange={(e) => setNickname(e.target.value)} className='nickname' placeholder='enter a nickname'></input>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='email' placeholder='enter your email here'></input>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='password' placeholder='enter your password here'></input>
                <button className='submitbtn' type='submit'></button>
            </form>
        </div>
    )
};