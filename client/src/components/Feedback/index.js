import React, { useState } from "react";
import { Heading, Input, Textarea } from "@chakra-ui/react";

export default function Feedback () {
    
    const feedbackHandler = () => {

    }
    
    const [firstName, setFirstName] = useState("");
    const [feedBack, setFeedBack] = useState("");

    return (
        <>
        <Heading className="feedBackTitle">Give us your feedback!</Heading>
        <form className="feedBackForm" onSubmit={feedbackHandler}>
            <Input className="firstNameFeedback" type="text" onChange={setFirstName} placeholder="please enter your first name here" />
            <Textarea className="feedBackText" type="text" placeholder="enter your comments here" onChange={setFeedBack} size="lg" />
        </form>
        </>
    )
};