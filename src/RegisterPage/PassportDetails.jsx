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

    validateSeries(value)
    {
        if (!value) return false;
        if (/^([0-9]{4})$/.test(value))
            //this.setState({isSeriesValid: true})
        //else this.setState({isSeriesValid: false});
            return true;
        else return false;
    }

    //validateNumber(value)
    //{
    //    if (!value) return false;
    //    //if (/^([0-9]{6}\+)$/.test(value))
    //    {return true}
    //    //else return false;
    //}




    handleSubmit(event) {
        console.log("handleSubmit");
        const { values, handleChange, valid_values } = this.props;
        event.preventDefault();

        //this.completeTimestamps();
        this.setState({ submitted: true });
        console.log("handleSubmit2");
        console.log(values.email , values.password,
             values.series , values.number,
             values.firstName , values.middleName,
             values.lastName , values.issuedBy,
             values.issuedAt , values.address,
             values.birthplace , values.birthdate , values.confirmPass,
             valid_values.isSeriesValid ,valid_values.isNumberValid);
        if (values.email && values.password
            && values.series && values.number
            && values.firstName && values.middleName
            && values.lastName && values.issuedBy
            && values.issuedAt && values.address
            && values.birthplace && values.birthdate && values.confirmPass
        && valid_values.isSeriesValid &&valid_values.isNumberValid) {
            console.log("handleSubmit3");

            const user = { email: values.email,
                password: values.password,
                series:values.series,
                number: values.number,
                firstName: values.firstName,
                middleName: values.middleName,
                lastName: values.lastName,
                issuedBy: values.issuedBy,
                issuedAt: values.issuedAt,
                address: values.address,
                birthplace: values.birthplace,
                birthdate: values.birthdate,
                confirmPass: values.confirmPass,
            }
            console.log("handleSubmit4");

            this.props.register(user);
        }
    }

    //togglePasswordVisiblity = () => {
    //    const { isPasswordShown } = this.state;
    //    this.setState({ isPasswordShown: !isPasswordShown });
    //};


    render() {
        const { values, handleChange, valid_values } = this.props;

        const { registering  } = this.props;
        const { submitted } = this.state;

        //const toggleBtn = () =>{
        //    this.setState({ isPasswordShown: !isPasswordShown });
        //}

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}

        return (
            <div style={{flex: '1', height:'100%'}}>
                <h2 className="text-center">Register</h2>
                <form name="form" onSubmit={this.handleSubmit} style={{flex: '1', height:'100%'}}>
                    <div className={'form-group' + (submitted && ((!values.series) || !valid_values.isSeriesValid)  ? ' has-error' : '')} style={{flex: '1', height:'100%'}}>
                        <label style={{fontSize:'16px'}} htmlFor="series">Series</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}} type="text" className="form-control" name="series" value={values.series}
                               pattern={"[0-9]{4}"} onChange={handleChange('series')} />
                        {submitted && !values.series &&
                            <div className="help-block">Series is required</div>
                        }
                        {submitted && values.series && !valid_values.isSeriesValid &&
                            <div className="help-block">Series has invalid symbols</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && (!values.number || !valid_values.isNumberValid)  ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="number">Number</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}} type="text" className="form-control" name="number" value={values.number } onChange={handleChange('number')} />
                        {submitted && !values.number &&
                            <div className="help-block">Number is required</div>
                        }
                        {submitted && values.number && !valid_values.isNumberValid &&
                            <div className="help-block">Number has invalid symbols</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.issuedBy ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="issuedBy">Issued By</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}} type="text" className="form-control" name="issuedBy" value={values.issuedBy} onChange={handleChange('issuedBy')} />
                        {submitted && !values.issuedBy &&
                            <div className="help-block">Issued By is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.issuedAt ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="issuedAt">Issued At</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}} type="date" className="form-control" name="issuedAt" value={values.issuedAt} max={new Date().toISOString().split('T')[0]} onChange={handleChange('issuedAt')} />
                        {submitted && !values.issuedAt &&
                            <div className="help-block">Issued At is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !values.address ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} htmlFor="address">Address</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}} type="text" className="form-control" name="address" value={values.address} onChange={handleChange("address")} />
                        {submitted && !values.address &&
                            <div className="help-block">Address is required</div>
                        }
                    </div>


                    <div className="form-group text-center">
                        <p>
                            <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.back}>Previous</button>
                            <br style={{fontSize:'24'}}></br>
                            <br style={{fontSize:'24'}}></br>
                            <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                        {registering &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
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

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(PassportDetails);
export { connectedRegisterPage as PassportDetails };