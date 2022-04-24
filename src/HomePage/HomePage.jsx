import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import  OwnPayment from "./OwnPayment";
import AnotherPayment from "./AnotherPayment";
import {ChooseOperation} from "./ChooseOperation";
import TelegramPayment from './TelegramPayment';
import {CreateBill} from "./CreateBill";

class HomePage extends React.Component {
    componentDidMount() {

        document.title = "SuperBank Home"

        //this.props.getUsers();
    }


    constructor(props) {
        super(props);
        //const { dispatch } = this.props;
        this.state = {
            step:1
        };
        this.changeStep = this.changeStep.bind(this);
        this.backStep = this.backStep.bind(this);


    }

    backStep () {
        const { step } = this.state;
        this.setState({
            step: 1
        });
    };

    // Go back to prev step
    changeStep(newstep) {
        const { step } = this.state;
        this.setState({
            step: newstep
        });
    };


    handleDeleteUser(id) {
        //return (e) => this.props.deleteUser(id);
    }


    render() {
        const { step } = this.state;
        const values = {};
        switch (step) {
            case 1:
                return (
                    <ChooseOperation
                        values={values}
                        changeStep={this.changeStep}
                        //handleChange={this.handleChange}
                        //values={values}
                        //valid_values={valid_values}
                    />
                );
            case 2:
                return (
                    <OwnPayment
                        values={values}
                        backStep={this.backStep}
                        //handleChange={this.handleChange}
                        //values={values}
                        //valid_values={valid_values}
                    />
                );
            case 3:
                return (
                    <AnotherPayment
                        values={values}
                        //changeStep={this.changeStep}
                        backStep={this.backStep}
                        //handleChange={this.handleChange}
                        //values={values}
                        //valid_values={valid_values}
                    />
                );
            case 4:
                return (
                    <TelegramPayment
                        values={values}
                        //changeStep={this.changeStep}
                        backStep={this.backStep}
                        //handleChange={this.handleChange}
                        //values={values}
                        //valid_values={valid_values}
                    />
                );
            case 6:
                return (
                    <CreateBill
                        values={values}
                        //changeStep={this.changeStep}
                        backStep={this.backStep}
                        //handleChange={this.handleChange}
                        //values={values}
                        //valid_values={valid_values}
                    />
                );
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}

function mapState(state) {
    const { user } = state.getallbill;
    //const { user } = authentication;
    return { user };
}

const actionCreators = {
    getAll_bill: userActions.getAll_bill
    //deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };