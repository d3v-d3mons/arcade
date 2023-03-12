import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { Input, Button, Form } from '@chakra-ui/react';

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
        <div>
            {auth.loggedIn() ? (
                <h1>Logged in</h1>
            ) : (
                <h1>Logged out</h1>
            )}
        </div>
    )
};