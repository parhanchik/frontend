import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import AnotherPayment from "./AnotherPayment";
import OwnPayment from "./OwnPayment";

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
            isEmailValid: false,
            isPasswordValid: false,
            isSeriesValid: false,
            isNumberValid: false,
            isFirstNameValid: false,
            isMiddleNameValid: false,
            isLastNameValid: false,
            isIssuedByValid: false,
            isIssuedAtValid: false,
            isAddressValid: false,
            isBirthplaceValid: false,
            isBirthdateValid: false,

            step:1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "SuperBank Register";
    }

    validatePassword (value)  {
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


    validate(name, value)
    {

        //console.log(name, value)
        //console.log(/^[0-9a-zA-Z._-]+@[0-9a-zA-Z._-]+\.[0-9a-zA-Z._-]+$/.test(value))
        if (name === "email")
        {

            if (/^[0-9a-zA-Z._-]+@[0-9a-zA-Z._-]+\.[0-9a-zA-Z._-]+$/.test(value))
            {console.log("YES");this.setState({ isEmailValid: true });}
            else {console.log("NO");this.setState({ isEmailValid: false });}
        }

        if (name === "password")
        {
            if (this.validatePassword(value))
            {this.setState({ isPasswordStrong: true });}
            else {this.setState({ isPasswordStrong: false });}

        }
        if (name === "series")
        {
            if (/^[0-9]{4}$/.test(value))
            {this.setState({ isSeriesValid: true });}
            else {this.setState({ isSeriesValid: false });}
        }

        if (name === "number")
        {
            if (/^[0-9]{6}$/.test(value))
            {this.setState({ isNumberValid: true });}
            else {this.setState({ isNumberValid: false });}
        }


        if (name === "firstName")
        {
            if (/^[A-Z][a-z]*$/.test(value))
            {this.setState({ isFirstNameValid: true });}
            else {this.setState({ isFirstNameValid: false });}
        }

        if (name === "middleName")
        {
            if (/^[A-Z][a-z]*$/.test(value))
            {this.setState({ isMiddleNameValid: true });}
            else {this.setState({ isMiddleNameValid: false });}
        }

        if (name === "lastName")
        {
            if (/^[A-Z][a-z]*$/.test(value))
            {this.setState({ isLastNameValid: true });}
            else {this.setState({ isLastNameValid: false });}
        }



    }


    handleChange(event) {
        const { name, value } = event.target;


        console.log("kkk");
        this.validate(name, value)
        console.log("kkk-2")

        this.setState({
            [name]:value
        });
    }



    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });


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

    handleChange = input => e => {

        this.validate(input, e.target.value)



        this.setState({ [input]: e.target.value });
    };



    render() {
        const { step } = this.state;
        const { email, password, series, number, firstName, middleName, lastName,
            issuedBy, issuedAt, address, birthplace, birthdate, confirmPass } = this.state;
        const values = { email, password, series, number, firstName, middleName, lastName,
            issuedBy, issuedAt, address, birthplace, birthdate, confirmPass };

        const { isPasswordStrong, isEmailValid, isPasswordValid, isSeriesValid, isNumberValid, isFirstNameValid, isMiddleNameValid, isLastNameValid } = this.state;
        const valid_values = { isPasswordStrong, isEmailValid, isPasswordValid, isSeriesValid, isNumberValid, isFirstNameValid, isMiddleNameValid, isLastNameValid };




        const { registering  } = this.props;



        switch (step) {
            case 1:
                return (
                    <OwnPayment
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        valid_values={valid_values}
                    />
                );
            case 2:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        valid_values={valid_values}
                    />
                );
            case 3:
                return (
                    <PassportDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        valid_values={valid_values}
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