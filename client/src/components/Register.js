import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/create', {
        username,
        password,
        phone: +phone, // Convert phone to a number
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>User Register </div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button variant="contained" type="submit">
          submit
        </Button>
      </Box>
    </>
  );
};

export default Register;
