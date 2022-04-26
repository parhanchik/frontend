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
            submitted: false,
            inputValue:"",
            payee:"",
            count:"",
            billsList:[
                //{ id: 'SELECT', limit: '', currency: '' },
            ]
        };

        this.props.create_transaction().then(result => {
            let str = JSON.stringify(result);
            console.log(str)
//            let ret = str.replace('{"items":{', '');
//            ret.slice(0, -1);

//            const obj = JSON.parse(ret)
//            console.log(obj.accounts);
//            for (var i = 0; i < obj.accounts.length; i++) {
//                var counter = obj.accounts[i];
//                if(counter.hasOwnProperty('balance')){
//                    this.addNewEmp(counter);
//                    //console.log(JSON.stringify(counter))
//                }
//                else
//                {
//                    let temp = JSON.parse(JSON.stringify(counter).slice(0, -1) +',"balance":"0"}');
//                    //console.log(temp)
//                    this.addNewEmp(temp);
//                }
//                //console.log(counter.id);
//            }
//
        });

        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.onChange = this.onChange.bind(this);

    }

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


    continue = e => {
        this.setState({submitted:true});
        const { values, handleChange, valid_values } = this.props;
        e.preventDefault();
        if (values.firstName && values.middleName && values.lastName && values.birthdate && values.birthplace
            && valid_values.isFirstNameValid && valid_values.isMiddleNameValid && valid_values.isLastNameValid)
            this.props.nextStep();
    };

    onChange = (event) =>
    {
        this.setState({inputValue:event.target.value});
        //console.log(event.target.value)
    }


    back = e => {
        this.setState({submitted:false});
        e.preventDefault();
        this.props.prevStep();
    };

    handleSubmitButton(e) {
        e.preventDefault();
        const { inputValue } = this.state;
        let id = inputValue.split(':', 1);

//        if (!this.state.submitted)
//        {
//            this.setState({ submitted: true });
//            this.setState({ disabled: false });
//            const { username, password } = this.state;
//            if (username && password) {
//                this.props.login(username, password);
//            }
//        }
//        else
//        {
//            this.setState({ submitted_code: true });
//            const { username, password } = this.state;
//            if (username && password && this.state.code) {
//                this.props.confirm(username, password, this.state.code);
//            }
//
//        }
    }




    render() {
        let empRecord = this.state.billsList.map((x)=>{
            return(
                <option>
                    {x.id+":"+x.limit+":"+x.currency+":"+x.balance}
                </option>
            )
        })


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
                                className="form-control form-control-lg" onChange={this.onChange}>
                            {empRecord}
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
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.handleSubmitButton}>Confirm</button>
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.props.backStep}>Back to Home</button>


                    </div>

                </div>
            </div>
        );
    }}

function mapState(state) {
    const { createtransaction } = state;
    //const { user } = authentication;
    return { createtransaction };
}

const actionCreators = {
    create_transaction: userActions.create_transaction,
    getAll_bill: userActions.getAll_bill

    //deleteUser: userActions.delete
}

const connectedAnotherPayment = connect(mapState, actionCreators)(AnotherPayment);
export { connectedAnotherPayment as AnotherPayment };



//export default AnotherPayment;