import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../redux/actions/authActions';
import {  setAuthentication } from '../redux/actions/authActions'
//import { useNavigate} from 'react-router-dom'; // Import useHistory

const Signin = () => {
  const [name, setName] = useState('');
  const [psw, setPsw] = useState('');
  const [ph, setPh] = useState('');

  

  const dispatch = useDispatch()
  useEffect(() => {
    // Check if the user is already authenticated from localStorage
    const storedAuthStatus = localStorage.getItem('isAuth');
    if (storedAuthStatus) {
      dispatch(setAuthentication(JSON.parse(storedAuthStatus)));
    }
  }, [dispatch]);

  //const history = useNavigate(); // Get the history object

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting automatically
    

    try {
      const response = await axios.get('/api/users/get', { name, psw, ph });
      console.log(response.data); // Response data will be in response.data

      // Assuming the response indicates successful login
      localStorage.setItem('isAuth', true )
      dispatch(signinSuccess())
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <div><h1> User signin</h1></div>
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
          defaultValue=""
          onChange={(e)=> setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue=""
          onChange={(e)=> setPsw(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue=""
          onChange={(e)=> setPh(e.target.value)}
        />
        <Button variant="contained" type='submit'>submit</Button>
      </Box>
    </>
  );
}

export default Signin;
