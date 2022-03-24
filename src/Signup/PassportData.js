import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const PassportData = ({ prevStep, nextStep, handleChange, values }) => {

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
                                placeholder="Series"
                                label="Series"
                                onChange={handleChange('series')}
                                defaultValue={values.series}
                                pattern=".*\S.{3,}.*" required
                            />
                        </Grid>
                        {/* last name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                placeholder="Number"
                                label="Number"
                                onChange={handleChange('number')}
                                defaultValue={values.number}
                            />
                        </Grid>

                        {/* last name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                placeholder="Issued By"
                                label="Issued By"
                                onChange={handleChange('issuedBy')}
                                defaultValue={values.issuedBy}
                            />
                        </Grid>

                        {/* country of residence */}
                        <Grid item xs={12}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Issued At"
                                onChange={handleChange('issuedAt')}
                                defaultValue={values.issuedAt}
                                fullWidth
                                type={"date"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                placeholder="Address"
                                label="Address"
                                onChange={handleChange('address')}
                                defaultValue={values.address}
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

export default PassportData

