import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

class CreateBill extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            currencies:'SELECT',
            limit:'',
            name:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

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
        this.props.backStep();
    };

    handleSubmit = e => {
        const { currencies, limit, name } = this.state;
        this.setState({submitted:true});
        e.preventDefault();
        var temp = 0;
        switch (currencies) {
            case 'RUBLES':
                temp = 1;
                break;
            case 'EURO':
                temp = 2;
                break;
            case 'DOLLARS':
                temp = 3;
                break;
            default:
                temp = 0;
        }
        //console.log(currencies, temp); return
        //console.log(currencies + limit + name);
        this.props.create_bill(temp, limit, name);
        this.back(e);
    };

    handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value)
        this.setState({ [name]: value });
    }

    //validateName(value)
    //{
    //    if (!value) return false;
    //    //if (/^([][0-9]{6}+)$/.test(value))
    //    {return true}
    //    //else return false;
    //}



    render() {

        const { currencies, limit, name } = this.state;



        const { registering  } = this.props;
        const { values, handleChange, valid_values } = this.props;
        // const { user, submitted, isPasswordShown, confirmPass, isPasswordStrong } = this.state;

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}
        const { submitted } = this.state;

        return (
            <div style={{flex: '1', height:'100%'}}>
                <h2 className="text-center">Create Bill</h2>
                <div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">Sum Of Payment</label>
                        <select style={{fontSize: '32px', height: '80px'}} name="currencies" value={this.state.currencies} onChange={this.handleChange}
                                className="form-control form-control-lg">
                            <option value="SELECT">SELECT</option>
                            <option value="RUBLES">RUBLES</option>
                            <option value="EURO">EURO</option>
                            <option value="DOLLARS">DOLLARS</option>
                        </select>
                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="limit">Limit</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="limit" onChange={this.handleChange} />
                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="name">Name</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="name" onChange={this.handleChange} />
                    </div>

                    <div className="form-group text-center">
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" disabled={!name || !limit || currencies==='SELECT'} onClick={this.handleSubmit}>Confirm</button>
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.props.backStep}>Back to Home</button>


                    </div>

                </div>
            </div>
        );
    }
}


function mapState(state) {
    const { user } = state.getallbill;
    //const { user } = authentication;
    return { user };
}

const actionCreators = {
    create_bill: userActions.create_bill
    //deleteUser: userActions.delete
}

const connectedCreateBill = connect(null, actionCreators)(CreateBill);
export { connectedCreateBill as CreateBill };

