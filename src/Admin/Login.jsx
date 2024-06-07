import * as React from 'react';
import { useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { db } from '../config/Firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';

import { Redirect , Link } from 'react-router-dom';



export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');

 
  const auth = async (e) => {
    e.preventDefault();

    try {
      // Query the 'User' collection to find a matching document
      const usersCollection = collection(db, 'User');
      const userQuery = query(usersCollection, where('Email', '==', email));

      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        setError('User not found');
        return;
      }

      // Assuming there's only one user with the given email
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      // Check if the password matches
      if (userData.Password === password) {
       
        setError('');
        const token = { Role: userData.Role, Login: true, Email: userData.Email }
        // / Convert the token object to a JSON string
        const tokenString = JSON.stringify(token);
        
        // Store the JSON string in localStorage
        localStorage.setItem('token', tokenString);      
        
        window.location.reload();
        // console.log("login successfully !!!!",token)
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Error during authentication');
      console.error(err);
    }
  };

  return (
    <CssVarsProvider>
      <main style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
        <Sheet
          sx={{
            width: 400,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography style={{textAlign: "center"}} level="h2" component="h1">
              <Link to="/">  <b >Reflect</b> </Link>
            </Typography>
            <Typography style={{textAlign: "center"}} level="h4" component="h1">
                <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
            <Typography level="body-sm" style={{color:"red"}}>{error ? error : null }</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => {setPassword(e.target.value)}}

            />
          </FormControl>

          <Button onClick={auth} sx={{ mt: 1 /* margin top */ }}>Log in</Button>
          
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}