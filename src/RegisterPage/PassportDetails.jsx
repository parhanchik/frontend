import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

class PassportDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    //validateSeries(value)
    //{
    //    if (!value) return false;
    //    if (/^([0-9]{4})$/.test(value))
    //        this.setState({isSeriesValid: true})
    //    else this.setState({isSeriesValid: false});
    //}

    //validateNumber(value)
    //{
    //    if (!value) return false;
    //    //if (/^([0-9]{6}\+)$/.test(value))
    //    {return true}
    //    //else return false;
    //}




    handleSubmit(event) {
        const { values, handleChange } = this.props;
        event.preventDefault();

        //this.completeTimestamps();
        this.setState({ submitted: true });

        if (values.email && values.password
            && values.series && values.number
            && values.firstName && values.middleName
            && values.lastName && values.issuedBy
            && values.issuedAt && values.address
            && values.birthplace && values.birthdate && values.confirmPass) {
            const user = { email: values.email,
                password: values.email,
                series:values.email,
                number: values.email,
                firstName: values.email,
                middleName: values.email,
                lastName: values.email,
                issuedBy: values.email,
                issuedAt: values.email,
                address: values.email,
                birthplace: values.email,
                birthdate: values.email,
                confirmPass: values.email,
            }

            this.props.register(user);
        }
    }

    //togglePasswordVisiblity = () => {
    //    const { isPasswordShown } = this.state;
    //    this.setState({ isPasswordShown: !isPasswordShown });
    //};


    render() {
        const { values, handleChange } = this.props;

        const { registering  } = this.props;
        const { submitted } = this.state;

        //const toggleBtn = () =>{
        //    this.setState({ isPasswordShown: !isPasswordShown });
        //}

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && (!values.series)  ? ' has-error' : '')}>
                        <label htmlFor="series">Series</label>
                        <input type="text" className="form-control" name="series" value={values.series} onChange={handleChange} />
                        {submitted && !values.series &&
                            <div className="help-block">Series is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.number ? ' has-error' : '')}>
                        <label htmlFor="number">Number</label>
                        <input type="text" className="form-control" name="number" value={values.number } onChange={handleChange} />
                        {submitted && !values.number &&
                            <div className="help-block">Number is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.issuedBy ? ' has-error' : '')}>
                        <label htmlFor="issuedBy">Issued By</label>
                        <input type="text" className="form-control" name="issuedBy" value={values.issuedBy} onChange={handleChange} />
                        {submitted && !values.issuedBy &&
                            <div className="help-block">Issued By is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.issuedAt ? ' has-error' : '')}>
                        <label htmlFor="issuedAt">Issued At</label>
                        <input type="date" className="form-control" name="issuedAt" value={values.issuedAt} onChange={handleChange} />
                        {submitted && !values.issuedAt &&
                            <div className="help-block">Issued At is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.address ? ' has-error' : '')}>
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" name="address" value={values.address} onChange={handleChange} />
                        {submitted && !values.address &&
                            <div className="help-block">Address is required</div>
                        }
                    </div>


                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Previous</button>
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

const connectedRegisterPage = connect(mapState, actionCreators)(PassportDetails);
export { connectedRegisterPage as PassportDetails };