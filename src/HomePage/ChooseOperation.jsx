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
            submitted: false,
            inputValue:"",
            billsList:[
                //{ id: 'SELECT', limit: '', currency: '' },
            ]
        };
        this.props.getAll_bill().then(result => {
            let str = JSON.stringify(result);
            let ret = str.replace('{"items":{', '');
            ret.slice(0, -1);

            const obj = JSON.parse(ret)
            console.log(obj.accounts);
            for (var i = 0; i < obj.accounts.length; i++) {
                var counter = obj.accounts[i];
                if(counter.hasOwnProperty('balance')){
                    this.addNewEmp(counter);
                    if (i=== 0)
                    {
                        this.props.handleChange(counter.id);
                    }
                    //console.log(JSON.stringify(counter))
                }
                else
                {


                    let temp = JSON.parse(JSON.stringify(counter).slice(0, -1) +',"balance":"0"}');
                    //console.log(temp)
                    if (i=== 0)
                    {
                        this.props.handleChange(temp.id);
                    }
                    this.addNewEmp(temp);
                }
                //console.log(counter.id);
            }

        });


        //const { getallbill } = this.props;
        //let str = JSON.stringify(getallbill.items);
        //console.log('123'+str)
        //this.setState({inputValue:this.props.getAll_bill()});

    }



    back = e => {
        this.setState({submitted:false});
        e.preventDefault();
        this.props.prevStep();
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

    testFunc = (event) => {
        //this.setState({accounts:this.props.getAll_bill()});
        const { getallbill } = this.props;
        let str = JSON.stringify(getallbill.items);
        let ret = str.replace('{"items":{', '');
        ret.slice(0, -1);

        const obj = JSON.parse(ret)
        console.log(obj.accounts);
        this.setState({inputValue:event.target.value});
        for (var i = 0; i < obj.accounts.length; i++) {
            var counter = obj.accounts[i];
            this.addNewEmp(counter);
            //console.log(counter.id);
        }

    }

    onChange = (event) =>
    {
        this.setState({inputValue:event.target.value});
        //console.log(event.target.value)
    }

    changeStep = (event) => {
        //console.log(this.state.accounts)
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
            case 'createBill':
                this.props.changeStep(6);
                break;
        }

    };


    render() {
        let empRecord = this.state.billsList.map((x)=>{
            return(
            <option>
                {x.id+":"+x.limit+":"+x.currency+":"+x.balance}
            </option>
            )
        })
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
                    <select style={{fontSize:'32px', height:'80px'}} name="accounts" className="form-control form-control-lg" onChange={this.onChange} >
                        {empRecord}
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
                        <button style={{fontSize:'20px', width:'100%'}} name='createBill' className="btn btn-primary" onClick={this.changeStep} >Create Bill</button>
                        <br style={{fontSize:'24'}}></br>
                        <br style={{fontSize:'24'}}></br>
                        <button style={{fontSize:'20px', width:'100%'}} name='logout' className="btn btn-primary" >Logout</button>
                        <button style={{fontSize:'20px', width:'100%'}} name='test' className="btn btn-primary" onClick={this.testFunc}  >test</button>



                    </div>


                </div>
            </div>
        );

    }
}

function mapState(state) {
    const { getallbill } = state;
    //const { user } = authentication;
    return { getallbill };
}

const actionCreators = {
    getAll_bill: userActions.getAll_bill
    //deleteUser: userActions.delete
}

const connectedChooseOperation = connect(mapState, actionCreators)(ChooseOperation);
export { connectedChooseOperation as ChooseOperation };

//export default ChooseOperation;