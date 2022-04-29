import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator'


import { userActions } from '../_actions';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

class OwnPayment extends React.Component {

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

        this.props.getAll_bill().then(result => {
            let str = JSON.stringify(result);
            console.log(str)
            let ret = str.replace('{"items":{', '');
            ret.slice(0, -1);

            const obj = JSON.parse(ret)
            console.log(obj.accounts);
            for (var i = 0; i < obj.accounts.length; i++) {
                var counter = obj.accounts[i];
                if(counter.hasOwnProperty('balance')){
                    this.addNewEmp(counter);
                    if (i === 0)
                    {
                        this.setState({inputValue:counter.id+":"+counter.limit+":"+counter.currency+":"+counter.balance});
                        this.setState({inputValue_to:counter.id+":"+counter.limit+":"+counter.currency+":"+counter.balance});
                    }
                    //console.log(JSON.stringify(counter))
                }
                else
                {
                    let temp = JSON.parse(JSON.stringify(counter).slice(0, -1) +',"balance":"0"}');
                    //console.log(temp)
                    if (i=== 0)
                    {
                        this.setState({inputValue:temp.id+":"+temp.limit+":"+temp.currency+":"+temp.balance});
                        this.setState({inputValue_to:temp.id+":"+temp.limit+":"+temp.currency+":"+temp.balance});
                    }
                    this.addNewEmp(temp);
                }

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
        this.props.prevStep();
    };


    changeStep = (event) => {
        const { name } = event.target;
        this.props.backStep();
    };

    addNewEmp=(bills)=>{
        this.setState(x=>({
            inputValue:'',
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
        this.props.create_transaction(id, payee, count)
    }


        render() {
            let empRecord = this.state.billsList.map((x)=>{
                return(
                    <option>
                        {x.id+":"+x.limit+":"+x.currency+":"+x.balance}
                    </option>
                )
            })

            const { inputValue, inputValue_to, count } = this.state;


            const { registering  } = this.props;
        const { values, handleChange, valid_values } = this.props;
        // const { user, submitted, isPasswordShown, confirmPass, isPasswordStrong } = this.state;

        //const handleSeriesChange = evt =>{
        //    const newSeries =
        //}

        return (
            <div style={{flex: '1', height:'100%'}}>
                <h2 className="text-center">Own Paymant</h2>
                <div>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">From Account</label>

                        <select style={{fontSize: '32px', height: '80px'}} name="accounts"
                            className="form-control form-control-lg" onChange={this.onChange}>
                            {empRecord}

                        </select>
                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">To Account</label>

                        <select style={{fontSize: '32px', height: '80px'}} name="payee"
                            className="form-control form-control-lg" onChange={this.onChange}>
                            {empRecord}
                    </select>
                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>
                    <div>
                        <label style={{fontSize:'16px'}} htmlFor="middleName">Sum Of Payment</label>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} type="text" className="form-control" name="count" value={count} onInput={this.handleChange} />
                    </div>
                    <br style={{fontSize:'24'}}></br>
                    <br style={{fontSize:'24'}}></br>

                    <div className="form-group text-center">
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" disabled={!inputValue || !inputValue_to || !count} onClick={this.handleSubmitButton}>Confirm</button>
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
    create_transaction: userActions.create_transaction,
    getAll_bill: userActions.getAll_bill

    //deleteUser: userActions.delete
}

const connectedOwnPayment = connect(null, actionCreators)(OwnPayment);
export { connectedOwnPayment as OwnPayment };


//export default OwnPayment;