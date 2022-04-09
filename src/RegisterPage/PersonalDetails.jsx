import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

class PersonalDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        };
    }

    continue = e => {
        this.setState({submitted:true});
        const { values, handleChange, valid_values } = this.props;
        e.preventDefault();
        if (values.firstName && values.middleName && values.lastName && values.birthdate && values.birthplace
            && valid_values.isFirstNameValid && valid_values.isMiddleNameValid && valid_values.isLastNameValid)
        this.props.nextStep();
    };

    back = e => {
        this.setState({submitted:false});
        e.preventDefault();
        this.props.prevStep();
    };


    //validateName(value)
    //{
    //    if (!value) return false;
    //    //if (/^([][0-9]{6}+)$/.test(value))
    //    {return true}
    //    //else return false;
    //}



    render() {


        const { registering  } = this.props;
        const { values, handleChange, valid_values } = this.props;
        // const { user, submitted, isPasswordShown, confirmPass, isPasswordStrong } = this.state;

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}
        const { submitted } = this.state;

        return (
            <div style={{flex: '1', height:'100%'}}>
                <h2 className="text-center">Register</h2>
                <form name="form" style={{flex: '1', height:'100%'}}>
                    <div className={'form-group' + (submitted && (!values.firstName || !valid_values.isFirstNameValid) ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="firstName">First Name</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="firstName" value={values.firstName} onChange={handleChange('firstName')} />
                        {submitted && !values.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                        {submitted && values.firstName && !valid_values.isFirstNameValid &&
                            <div className="help-block">First Name has invalid symbols</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && (!values.middleName || !valid_values.isMiddleNameValid) ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">Middle Name</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="middleName" value={values.middleName} onChange={handleChange('middleName')} />
                        {submitted && !values.middleName &&
                            <div className="help-block">Middle Name is required</div>
                        }
                        {submitted && values.middleName && !valid_values.isMiddleNameValid &&
                            <div className="help-block">Middle Name has invalid symbols</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && (!values.lastName || !valid_values.isLastNameValid) ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="lastName">Last Name</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="lastName" value={values.lastName} onChange={handleChange('lastName')} />
                        {submitted && !values.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                        {submitted && values.lastName && !valid_values.isLastNameValid &&
                            <div className="help-block">Last Name has invalid symbols</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.birthplace ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="birthplace">Birthplace</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="birthplace" value={values.birthplace} onChange={handleChange('birthplace')} />
                        {submitted && !values.birthplace &&
                            <div className="help-block">Birthplace is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.birthdate ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="birthdate">Birthdate</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="date" className="form-control" name="birthdate" value={values.birthdate} onChange={handleChange('birthdate')} />
                        {submitted && !values.birthdate &&
                            <div className="help-block">Birthdate is required</div>
                        }
                    </div>

                    <div className="form-group text-center">
                        <p>
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.continue}>Next</button>
                            <br style={{fontSize:'24'}}></br>

                            <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.back}>Previous</button>

                            <br/>
                            <br/>
                            <Link style={{fontSize:'20px', width:'100%'}} to="/login">
                                <button style={{background:'indianred',fontSize:'20px', width:'100%'}} className="btn btn-primary">
                                    Cancel
                                </button>
                            </Link>

                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default PersonalDetails;