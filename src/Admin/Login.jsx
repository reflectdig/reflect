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
import HelmetWrapper from '../HelmetWrapper';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');

 
  const auth = async (e) => {
    e.preventDefault();

    try {
      const usersCollection = collection(db, 'User');
      const userQuery = query(usersCollection, where('Email', '==', email));
      const querySnapshot = await getDocs(userQuery);
      if (querySnapshot.empty) {
        setError('User not found');
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      if (userData.Password === password) {
       
        setError('');
        const token = { Role: userData.Role, Login: true, Email: userData.Email }
        const tokenString = JSON.stringify(token);
        
        localStorage.setItem('token', tokenString);              
        window.location.reload();
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
      <HelmetWrapper
        title="Login - Reflect Skin & Hair Clinic"
        description="Reflect Skin and Hair Clinic, located in Coimbatore, is a premier dermatology and trichology center dedicated to providing advanced skin and hair care solutions. The clinic is renowned for its state-of-the-art facilities and a team of experienced dermatologists and trichologists who offer personalized treatments for various skin and hair conditions. Services at Reflect Skin and Hair Clinic include acne treatment, anti-aging solutions, hair restoration, laser hair removal, and other cosmetic dermatology procedures. With a focus on utilizing the latest technology and evidence-based practices, the clinic aims to deliver effective and safe outcomes for all its clients, ensuring they achieve optimal skin and hair health."
      />
      <main style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
        <Sheet
          sx={{
            width: 400,
            mx: 'auto', 
            my: 4, 
            py: 3, 
            px: 2, 
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
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => {setPassword(e.target.value)}}

            />
          </FormControl>
          <Button onClick={auth} sx={{ mt: 1 }}>Log in</Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}