import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    registration : {
                      userName : '',
                      email : '',
                      password : '',
                      confirmPassword : '',
                      isRegistered : false,
                   },
    login : {
              email : '',
              password : '',
              isLogedin : false
            }
  }

  const registrationSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
      setRegistrationName : (state, action) => {
          state.registration.userName = action.payload;
      },
      setRegistrationEmail : (state, action) => {
        state.registration.email = action.payload;
      },
      setRegistrationPassword : (state, action) => {
        state.registration.password = action.payload;
      },
      setRegistrationConfirmPassword : (state, action) => {
        state.registration.confirmPassword = action.payload;
      },
      setRegistrationIsRegisted : (state, action) => {
        state.registration.isRegistered = action.payload;
      },
      setRegisteredSuccess : (state) => {
        state.registration.userName = '';
        state.registration.email = '';
        state.registration.password = '';
        state.registration.confirmPassword = '';
        state.registration.isRegistered = false;
      },


      setLoginEmail : (state, action) => {
        state.login.email = action.payload;
      },
      setLoginPassword : (state, action) => {
        state.login.password = action.payload;
      },
      setLoginIsLogedin : (state, action) => {
        state.login.isLogedin = action.payload;
      },
      setLoginEmailSuccess : (state) => {
        state.login.email = '';
        state.login.password = '';
        state.login.isLogedin = false;
      }
    
    }
  });
   
  export const {setRegistrationName, 
                setRegistrationEmail, 
                setRegistrationPassword, 
                setRegistrationConfirmPassword,
                setRegistrationIsRegisted,
                setRegisteredSuccess,
                setLoginEmail,
                setLoginPassword,
                setLoginIsLogedin,
                setLoginEmailSuccess,
               } = registrationSlice.actions;

 export default registrationSlice.reducer;