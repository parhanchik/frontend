import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import Success from './Success'
import PassportData from "./PassportData";

export class Signup extends Component {

  state = {
    step: 1,
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
    isPasswordShown: false,
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
  }

  componentDidMount() {
    document.title = "SuperBank Register";
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { email, password, series, number, firstName, middleName, lastName, issuedBy, issuedAt, address, birthplace, birthdate,
      submitted, isPasswordShown, confirmPass, isPasswordStrong, isEmailValid, isPasswordValid, isSeriesValid, isNumberValid, isFirstNameValid,
      isMiddleNameValid , isLastNameValid , isIssuedByValid , isIssuedAtValid , isAddressValid ,isBirthplaceValid , isBirthdateValid } = this.state;
    const values_first = { email,
      password,
      isPasswordShown,
      confirmPass,
      isPasswordStrong,
      isEmailValid,
      isPasswordValid}
    const values_second = {
      firstName,
      middleName,
      lastName,
      birthplace,
      birthdate,
      isFirstNameValid,
      isMiddleNameValid ,
      isLastNameValid ,
      isBirthplaceValid ,
      isBirthdateValid }
    const values_third = {
      series,
      number,
      issuedBy,
      issuedAt,
      address,
      isSeriesValid,
      isNumberValid,
      isIssuedByValid ,
      isIssuedAtValid ,
      isAddressValid}
    const values_fourth = {
      email, password, series, number, firstName, middleName, lastName, issuedBy, issuedAt, address, birthplace, birthdate,
      submitted, confirmPass  }

    switch(step) {
      case 1:
        return (
          <UserDetails
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values_first }
          />
        )
      case 2:
        return (
          <PersonalDetails
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values_second }
          />
        )
      case 3:
          return (
            <PassportData
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values_third }
            />
          )
      case 4:
        return (
            <Confirmation
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                values={ values_fourth }
            />
        )
        case 5:
          return (
            <Success />
          )
      default:
          // do nothing
    }
  }
}
