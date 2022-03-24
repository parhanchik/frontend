import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

class UserDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            isPasswordShown: false,
            isPasswordStrong: false,
        };
    }

    continue = e => {
        this.setState({submitted:true});
        const { values, handleChange } = this.props;
        e.preventDefault();
        if (values.email && values.password && values.confirmPass)
        this.props.nextStep();
    };


    validatePassword(value) {
        if (!value) return false;

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            return true;
        } else {
            return false;
        }
    }

    validateEmail(value)
    {
        if (!value) return false;
        if (/^([a-z0-9_]+@[a-z0-9_]+\.[a-z0-9_]+)$/.test(value))
            this.setState({isEmailValid: true})
        else this.setState({isEmailValid: false});
    }


    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    handleSubmitFool(event)
    {

    }

    render() {

        const { values, handleChange } = this.props;

        const { registering  } = this.props;
        const { submitted } = this.state;

        const { isPasswordShown, isPasswordStrong } = this.state;

        const toggleBtn = () =>{
            this.setState({ isPasswordShown: !isPasswordShown });
        }



        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" >
                    <div className={'form-group' + (submitted && !values.email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={values.email} onChange={handleChange('email')} />
                        {submitted && !values.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && (!isPasswordStrong || !values.password) ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <div>
                            <input type={isPasswordShown ? "text" : "password"} className="password-field" name="password" value={values.password} onChange={handleChange('password')} />
                            {submitted && !this.validatePassword(values.password) && values.password &&
                                <div className="help-block">Password is not strong</div>
                            }
                            {submitted && !values.password &&
                                <div className="help-block">Password is required</div>
                            }
                            <button className="btn" onClick={toggleBtn} type={"button"}>
                                {isPasswordShown ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                            </button>

                        </div>
                    </div>
                    <div className={'form-group' + (submitted && (values.confirmPass !== values.password || !values.confirmPass) ? ' has-error' : '')}>
                        <label htmlFor="confPass">Confirm Pass</label>
                        <input type="password" className="form-control" name="confPass" value={values.confirmPass} onChange={handleChange("confirmPass")} />
                        {submitted && values.confirmPass !== values.password && values.confirmPass &&
                            <div className="help-block">Password are not equal</div>
                        }
                        {submitted && !values.confirmPass &&
                            <div className="help-block">Confirm Pass is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.continue}>Next</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserDetails;