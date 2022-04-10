import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

class ChooseOperation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        };
    }

    handleSubmit = e => {
        this.setState({submitted:true});
        const { values, valid_values } = this.props;
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
    changeStep = (event) => {
        const { name } = event.target;
        switch (name) {
            case 'ownTransfer':
                this.props.changeStep(2);
                break;
            case 'anotherTransfer':
                this.props.changeStep(3);
                break;
            case 'tgTransfer':
                this.props.changeStep(4);
                break;
            case 'history':
                this.props.changeStep(5);
                break;
        }

    };


    render() {
        const { values } = this.props;


        //const { registering  } = this.props;
        //const { values, handleChange, valid_values } = this.props;
        // const { user, submitted, isPasswordShown, confirmPass, isPasswordStrong } = this.state;

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}
        //const { submitted } = this.state;

        return (
            <div style={{flex: '1', height:'100%'}}>
                <br/>

                <div  style={{flex: '1', height:'100%'}}>
                    <select style={{fontSize:'32px', height:'80px'}} name="accounts" className="form-control form-control-lg" >
                        <option value="iphone 6s">iPhone 6S</option>
                        <option value="lumia 950">Lumia 950</option>
                        <option value="nexus 5x">Nexus 5X</option>
                        <option value="galaxy s7">Galaxy S7</option>
                    </select>
                    <br style={{fontSize:'24'}}></br>

                    <div className="form-group text-center">
                        <button style={{fontSize:'20px', width:'100%'}} name='ownTransfer' className="btn btn-primary" onClick={this.changeStep}>Transfer to own account</button>
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>
                        <button style={{fontSize:'20px', width:'100%'}} name='anotherTransfer' className="btn btn-primary" onClick={this.changeStep} >Transfer to another account</button>
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>

                        <button style={{fontSize:'20px', width:'100%'}} name='tgTransfer' className="btn btn-primary" onClick={this.changeStep} >Transfer with Telegram</button>
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>
                        <button style={{fontSize:'20px', width:'100%'}} name='history' className="btn btn-primary" onClick={this.changeStep} >Transaction history</button>
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>
                        <button style={{fontSize:'20px', width:'100%'}} name='logout' className="btn btn-primary" >Logout</button>


                    </div>


                </div>
            </div>
        );

    }
}

export default ChooseOperation;