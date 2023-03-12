import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { Input, Button, Form } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Homepage () {

    return (
        <div>
            {auth.loggedIn() ? (
                <Button><Link to="/snake">Snake</Link></Button>
                
            ) : (
                <h1>Log in to view games</h1>
            )}
        </div>
    )
};