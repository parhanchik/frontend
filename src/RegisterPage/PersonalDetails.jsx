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
        const { values, handleChange } = this.props;
        e.preventDefault();
        if (values.firstName && values.middleName && values.lastName && values.birthdate && values.birthplace )
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
        const { values, handleChange } = this.props;
        // const { user, submitted, isPasswordShown, confirmPass, isPasswordStrong } = this.state;

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}
        const { submitted } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form">
                    <div className={'form-group' + (submitted && !values.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={values.firstName} onChange={handleChange} />
                        {submitted && !values.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.middleName ? ' has-error' : '')}>
                        <label htmlFor="middleName">Middle Name</label>
                        <input type="text" className="form-control" name="middleName" value={values.middleName} onChange={handleChange} />
                        {submitted && !values.middleName &&
                            <div className="help-block">Middle Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={values.lastName} onChange={handleChange} />
                        {submitted && !values.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.birthplace ? ' has-error' : '')}>
                        <label htmlFor="birthplace">Birthplace</label>
                        <input type="text" className="form-control" name="birthplace" value={values.birthplace} onChange={handleChange} />
                        {submitted && !values.birthplace &&
                            <div className="help-block">Birthplace is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.birthdate ? ' has-error' : '')}>
                        <label htmlFor="birthdate">Birthdate</label>
                        <input type="date" className="form-control" name="birthdate" value={values.birthdate} onChange={handleChange} />
                        {submitted && !values.birthdate &&
                            <div className="help-block">Birthdate is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.continue}>Next</button>
                        <button className="btn btn-primary" onClick={this.back}>Previous</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default PersonalDetails;