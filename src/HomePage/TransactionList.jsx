import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

class TransactionList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            inputValue:"",
            inputValue_to:"",
            count:"",
            billsList:[
                //{ id: 'SELECT', limit: '', currency: '' },
            ]

        };

        this.props.get_transaction(this.props.values.id).then(result => {
            let str = JSON.stringify(result);
            console.log("000"+str)
            //let ret = str.replace('{"transactions":', '');
            let ret = str
            //ret = ret.slice(0, -1);
            console.log("000"+ret)

            const obj = JSON.parse(ret)
            console.log(obj.transactions);
            obj.transactions.sort(function(a, b) {
                return (a.id) - (b.id);
            });
            for (var i = 0; i < obj.transactions.length; i++) {
                let counter = obj.transactions[i];
                //if(counter.hasOwnProperty('balance')){
                    this.addNewEmp(counter);
                        //this.setState({inputValue:counter.id+":"+counter.balance + " " +counter.currency});
                  //console.log(JSON.stringify(counter))

                //console.log(counter.id);
            }

        });
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
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


    changeStep = (event) => {
        const { name } = event.target;
        this.props.backStep();
    };

    addNewEmp=(bills)=>{
        this.setState(x=>({
            billsList:[
                ...x.billsList,
                bills
            ]
        }))
    }

    onChange = (event) =>
    {
        this.setState({inputValue:event.target.value});
        //console.log(event.target.value)
    }

    onChange1 = (event) =>
    {
        this.setState({inputValue_to:event.target.value});
        //console.log(event.target.value)
    }

    handleSubmitButton(e) {
        e.preventDefault();
        const {inputValue, inputValue_to, count} = this.state;
        let id = inputValue.split(':', 1);
        let payee = inputValue_to.split(':', 1);
        //this.props.create_transaction(id, payee, count)
    }


        render() {
            let empRecord = this.state.billsList.map((x)=>{
                return(
                    <li>
                        {x.id+":"+x.accountFrom+":"+x.accountTo+":"+x.amount+":"+x.type+":"+x.time+":"+x.error}
                    </li>
                )
            })

        const { registering  } = this.props;
        const { values, handleChange, valid_values } = this.props;
        // const { user, submitted, isPasswordShown, confirmPass, isPasswordStrong } = this.state;

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}
            const { submitted, payee, count } = this.state;

        return (

            <div style={{flex: '1', height:'100%'}}>
                <h2 className="text-center">Transaction List</h2>
                <div>

                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">Transaction List</label>

                        <ul style={{fontSize: '32px', height: '80px'}} name="payee"
                             >
                            {empRecord}
                        </ul>
                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>

                    <div className="form-group text-center">
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.props.backStep}>Back to Home</button>


                    </div>

                </div>
            </div>
        );
    }
}

const actionCreators = {

    get_transaction: userActions.get_transaction

    //deleteUser: userActions.delete
}

const connectedTransactionList = connect(null, actionCreators)(TransactionList);
export { connectedTransactionList as TransactionList };


//export default OwnPayment;