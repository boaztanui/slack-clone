import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function ChatInput({ChannelName, channelId, chatRef}) {
    const [user] = useAuthState(auth);

    const [input, setInput] = useState ('');
    const sendMessage = (e) => {
        e.preventDefault(); //This will prevent refereshing of the page 
        if (!channelId) {
            //do something
            return false;
        }

        db.collection('rooms').doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName, 
            userImage: user.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput('');
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={`Message # ${ChannelName}`} />
                <Button hidden type='submit' onClick={sendMessage}> SEND</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center
    }

    > form > input {
        position: fixed ;
        bottom: 30px;
        width: 60%;
        border-radius: 3px;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;
