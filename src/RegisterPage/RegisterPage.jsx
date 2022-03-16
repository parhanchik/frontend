import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: '',
                passport: {
                    series: '',
                    number: '',
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    issuedBy: '',
                    issuedAt: '',
                    address: '',
                    birthplace: '',
                    birthdate: ''
                },
            },
            submitted: false,
            isPasswordShown: false,
            confirmPass: {
                confPass: ''
            },
            isPasswordStrong: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(value) {
        //alert(value);
        if (!value) return false;

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            return true;
            //alert("YES");
        } else {
            //alert("NO");
            return false;
        }
    }


    handleChange(event) {
        const { name, value } = event.target;
        const { user, confirmPass } = this.state;

        if (name === "password")
        {
            if (this.validate(value))
            {this.setState({ isPasswordStrong: true });}
            else {this.setState({ isPasswordStrong: false });}

        }
        this.setState({
            user: {
                ...user,
                [name]: value,
                passport:
                    {
                        ...user.passport,
                        [name]: value,
                    }
            },
            confirmPass: {
                ...confirmPass,
                [name]: value
            }
        });



        //else {this.setState({ isPasswordStrong: true });}
        //else {return;}

        //this.setState({confirmPass: {...confirmPass, [name]:value}})
    }

    //handleChange1(event) {
    //    const { name, value } = event.target;
    //    const { confirmPass } = this.state;
    //    this.setState({confirmPass: {...confirmPass, [name]:value}})
    //}


    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user, confirmPass, isPasswordStrong } = this.state;

        //if (user.password && this.validate(user.password))
        //{this.setState({ isPasswordStrong: true });}
        //else {return;}

        if (user.email && user.password
            && user.passport.series && user.passport.number
            && user.passport.firstName && user.passport.middleName
            && user.passport.lastName && user.passport.issuedBy
            && user.passport.issuedAt && user.passport.address
            && user.passport.birthplace && user.passport.birthdate && confirmPass.confPass
            && isPasswordStrong) {

                this.props.register(user);
        }
    }

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };


    render() {


        const { registering  } = this.props;
        const { user, submitted, isPasswordShown, confirmPass, isPasswordStrong } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && (!isPasswordStrong || !user.password) ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !isPasswordStrong && user.password &&
                            <div className="help-block">Password is not strong</div>
                        }
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && (confirmPass.confPass !== user.password || !confirmPass.confPass) ? ' has-error' : '')}>
                        <label htmlFor="confPass">Confirm Pass</label>
                        <input type="password" className="form-control" name="confPass" value={confirmPass.confPass} onChange={this.handleChange} />
                        {submitted && confirmPass.confPass !== user.password && confirmPass.confPass &&
                            <div className="help-block">Password are not equal</div>
                        }
                        {submitted && !confirmPass.confPass &&
                            <div className="help-block">Confirm Pass is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.series ? ' has-error' : '')}>
                        <label htmlFor="series">Series</label>
                        <input type="text" className="form-control" name="series" value={user.passport.series} onChange={this.handleChange} />
                        {submitted && !user.passport.series &&
                            <div className="help-block">Series is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.number ? ' has-error' : '')}>
                        <label htmlFor="number">Number</label>
                        <input type="text" className="form-control" name="number" value={user.passport.number} onChange={this.handleChange} />
                        {submitted && !user.passport.number &&
                            <div className="help-block">Number is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.passport.firstName} onChange={this.handleChange} />
                        {submitted && !user.passport.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.middleName ? ' has-error' : '')}>
                        <label htmlFor="middleName">Middle Name</label>
                        <input type="text" className="form-control" name="middleName" value={user.passport.middleName} onChange={this.handleChange} />
                        {submitted && !user.passport.middleName &&
                            <div className="help-block">Middle Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.passport.lastName} onChange={this.handleChange} />
                        {submitted && !user.passport.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.issuedBy ? ' has-error' : '')}>
                        <label htmlFor="issuedBy">Issued By</label>
                        <input type="text" className="form-control" name="issuedBy" value={user.passport.issuedBy} onChange={this.handleChange} />
                        {submitted && !user.passport.issuedBy &&
                            <div className="help-block">Issued By is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.issuedAt ? ' has-error' : '')}>
                        <label htmlFor="issuedAt">Issued At</label>
                        <input type="date" className="form-control" name="issuedAt" value={user.passport.issuedAt} onChange={this.handleChange} />
                        {submitted && !user.passport.issuedAt &&
                            <div className="help-block">Issued At is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.address ? ' has-error' : '')}>
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" name="address" value={user.passport.address} onChange={this.handleChange} />
                        {submitted && !user.passport.address &&
                            <div className="help-block">Address is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.birthplace ? ' has-error' : '')}>
                        <label htmlFor="birthplace">Birthplace</label>
                        <input type="text" className="form-control" name="birthplace" value={user.passport.birthplace} onChange={this.handleChange} />
                        {submitted && !user.passport.birthplace &&
                            <div className="help-block">Birthplace is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passport.birthdate ? ' has-error' : '')}>
                        <label htmlFor="birthdate">Birthdate</label>
                        <input type="date" className="form-control" name="birthdate" value={user.passport.birthdate} onChange={this.handleChange} />
                        {submitted && !user.passport.birthdate &&
                            <div className="help-block">Birthdate is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };