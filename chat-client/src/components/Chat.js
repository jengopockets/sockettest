import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { Card, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import './Chat.css';
import { Box } from '@mui/system';

const useStyles = makeStyles({
    root: {
        width: '400px',
        height: '600px',
        display: 'flex',
        alignContent:'space-between',
        justifyContent: 'space-around',
        marginBottom: '2rem',
        backgroundColor: 'black',
    },
    card:{
        color: '#646464',
        background: '#061161',
        opacity: '40%',
        borderRadius: '12px'
    }
})

function Chat() {
  const [socket, setSocket] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:5000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <>
    <Card className={classes.root} backgroundColor="#061161">
        <div className="Chat">
        <Typography variant="h4" position="center" color="#646464" backgroundColor="#061161" borderRadius="12px" paddingLeft="1rem" paddingRight="1rem" marginTop="2rem" textAlign="center">
            Eternal Chat
        </Typography>
        {/* { socket ? (
            <div>

                <Box>
                    <div className="chat-container">
                        <Messages socket={socket} />
                    </div>
                </Box>
                <Box>
                    <div >
                        <MessageInput socket={socket} />
                    </div>
                </Box>
            </div>
        ) : (
            <div>Not Connected</div>
        )} */}
        </div>
    </Card>
    </>
  );
}

export default Chat;