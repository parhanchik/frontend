import React, {useState} from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import validator from "validator";

const UserDetails = ({ nextStep, handleChange, values }) => {
    const [cont, setCont] = useState(false);




    // for continue event listener
  const Continue = e => {
//      console.log(continueState);
        setCont(true)
//        console.log(continueState);
//        console.log(values.email)
//      console.log(continueState && !values.email)
    e.preventDefault();
    if (values.email && values.password && values.confirmPass)
    nextStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>
              {/* email address */}
              <Grid item xs={12} >
                <TextField
                    style={{ background: (!values.email && cont) ? 'red' : '' }}
                  placeholder="Email Address"
                  label="Email Address"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="email"
                  variant={"outlined"}
                  fullWidth

                />
              </Grid>
              <br />
              {/* username */}
              <Grid item xs={12} >
                <TextField 
                  placeholder="Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  // variant="outlined"
                  autoComplete="password"
                  fullWidth
                />
              </Grid>
              <br />
              {/* password */}
              <Grid item xs={12} >
                <TextField 
                  placeholder="Conform Password"
                  label="Conform Password"
                  onChange={handleChange('confirmPass')}
                  defaultValue={values.confirmPass}
                  // variant="outlined"
                  autoComplete="confirmPass"
                  fullWidth
                  type="password"
                />
              </Grid>
          </Grid>
          <br />
          <Button 
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default UserDetails
