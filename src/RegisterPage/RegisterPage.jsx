import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import {PassportDetails} from "./PassportDetails";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

                email: '',
                password: '',
                    series: '',
                    number: '',
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    issuedBy: '',
                    issuedAt: '',
                    address: '',
                    birthplace: '',
                    birthdate: '',
            submitted: false,
            //isPasswordShown: false,
            confirmPass: '',
            isPasswordStrong: false,
            step:1
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "SuperBank Register";
    }




    handleChange(event) {
        const { name, value } = event.target;

        if (name === "password")
        {
            if (this.validatePassword(value))
            {this.setState({ isPasswordStrong: true });}
            else {this.setState({ isPasswordStrong: false });}
//
        }

        this.setState({
            [name]:value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        //this.completeTimestamps();
        this.setState({ submitted: true });
        //const { user, confirmPass, isPasswordStrong } = this.state;


        if (this.state.email && this.state.password
            && this.state.series && this.state.number
            && this.state.firstName && this.state.middleName
            && this.state.lastName && this.state.issuedBy
            && this.state.issuedAt && this.state.address
            && this.state.birthplace && this.state.birthdate && this.state.confirmPass
            && this.state.isPasswordStrong) {
                const user = { email: this.state.email,
                    password: this.state.email,
                    series:this.state.email,
                    number: this.state.email,
                    firstName: this.state.email,
                    middleName: this.state.email,
                    lastName: this.state.email,
                    issuedBy: this.state.email,
                    issuedAt: this.state.email,
                    address: this.state.email,
                    birthplace: this.state.email,
                    birthdate: this.state.email,
                    confirmPass: this.state.email,
                }
                this.props.register(user);
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };



    render() {
        const { step } = this.state;
        const { email, password, series, number, firstName, middleName, lastName,
            issuedBy, issuedAt, address, birthplace, birthdate, confirmPass } = this.state;
        const values = { email, password, series, number, firstName, middleName, lastName,
            issuedBy, issuedAt, address, birthplace, birthdate, confirmPass };
        const { registering  } = this.props;

        //const toggleBtn = () =>{
        //    this.setState({ isPasswordShown: !isPasswordShown });
        //}

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}

        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <PassportDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            default:
                (console.log('This is a multi-step form built with React.'))
        }

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