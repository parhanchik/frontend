import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>

            {/* first name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>
              <TextField
                  placeholder="Middle Name"
                  label="Middle Name"
                  onChange={handleChange('middleName')}
                  defaultValue={values.middleName}
              />
            </Grid>

            {/* last name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
            </Grid>

            {/* country of residence */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Birthplace"
                label="Birthplace"
                onChange={handleChange('birthplace')}
                defaultValue={values.birthplace}
                autoComplete="birthplace"
                fullWidth
              />
            </Grid>
          <Grid item xs={12}>
            <TextField
                InputLabelProps={{ shrink: true }}
                label="Birthdate"
                onChange={handleChange('birthdate')}
                defaultValue={values.birthdate}
                fullWidth
                type={"date"}
            />
          </Grid>

            {/* level of education */}
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default PersonalDetails

