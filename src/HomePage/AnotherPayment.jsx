import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

class AnotherPayment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        };
    }

    changeStep = (event) => {
        const { name } = event.target;
        this.props.backStep();
    };


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
                <h2 className="text-center">Own Paymant</h2>
                <div>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">From Account</label>

                        <select style={{fontSize: '32px', height: '80px'}} name="accounts"
                                className="form-control form-control-lg">
                            <option value="iphone 6s">iPhone 6S</option>
                            <option value="lumia 950">Lumia 950</option>
                            <option value="nexus 5x">Nexus 5X</option>
                            <option value="galaxy s7">Galaxy S7</option>
                        </select>
                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">To Account</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="Another Account"  />

                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">Sum Of Payment</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="Sum"  />
                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>

                    <div className="form-group text-center">
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary">Confirm</button>
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.props.backStep}>Back to Home</button>


                    </div>

                </div>
            </div>
        );
    }}

export default AnotherPayment;