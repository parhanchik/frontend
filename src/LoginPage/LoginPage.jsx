import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers/history';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { userActions } from '../_actions';
//import './style.css';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            code: '',
            usernotfound: false,
            wrongcode: false,
            submitted: false,
            submitted_code: false,
            disabled: true,
            isPasswordShown: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);


    }

    componentDidMount() {
        document.title = "SuperBank Login"
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    handleSubmitButton(e) {
        e.preventDefault();
        this.setState({usernotfound: false}, function()  {
            console.log(this.state.usernotfound, 'usernotfound');

        console.log(this.state.usernotfound, this.state.disabled,this.state.submitted)
        if (!this.state.usernotfound)
        if (!this.state.submitted)
        {
            //this.setState({ disabled: true });
            this.setState({ submitted: true });
            const { username, password } = this.state;
            if (username && password) {
                 this.props.login(username, password).then(result => {
                     if (result && result.toString() === "user not found - not found") {
                         console.log("set true")
                         this.setState({usernotfound: true});
                         this.setState({submitted: false});
                         this.setState({ disabled: true });

                     }
                     else {                         console.log("set false disable")

                         this.setState({disabled: false});
                     }
                 });;
                //console.log(this.props.error)
                //console.log(this.props.users)
                //console.log(this.props.loggingIn)
            }

        }
        else
        {
            this.setState({ submitted_code: true });
            this.setState({wrongcode: true}, function(){
                const { username, password } = this.state;
                if (username && password && this.state.code) {
                    this.props.confirm(username, password, this.state.code).then(result => {
                        console.log(result)
                        if (result && result.toString() === "can't get code - code not found - not found") {
                            console.log("set true")

                            this.setState({wrongcode: true});
                            //this.setState({submitted_code: false});
                            //this.setState({ disabled: true });

                        }
                    });;;
                }
                }
            );



        }
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props.error)
        console.log(this.props.users)
        console.log(this.props.loggingIn)

    }

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    render() {
        const { isPasswordShown, usernotfound } = this.state;
        const { loggingIn } = this.props;
        const { username, password, submitted, submitted_code, code } = this.state;

        const toggleBtn = () =>{
            this.setState({ isPasswordShown: !isPasswordShown });

        }

        return (
            <div style={{flex: '1', height:'100%'}} >
                <br/>

                <div  style={{flex: '1', height:'100%'}} >
                <h2 className="text-center">Login To Profile</h2>

                <form name="form" onSubmit={this.handleSubmit} style={{flex: '1', height:'100%'}} autoComplete="off">
                    <div className={'form-group' + (submitted && !username || usernotfound ? ' has-error' : '')} style={{flex: '1', height:'100%'}} >
                        <label style={{fontSize:'16px'}} htmlFor="username" >Username</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}} autoComplete="off" type="email" readOnly={this.state.disabled ? "" : "readonly"} required className="form-control" placeholder="user@gmail.com" name="username" value={username} onInput={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                        {usernotfound &&
                            <div className="help-block">Incorrect e-mail or password. Try again</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password || usernotfound ? ' has-error' : '')} >
                        <label style={{fontSize:'16px'}} htmlFor="password">Password</label>
                        <div>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', paddingRight:'50px', width:'100%'}} className="password-field" autoComplete="new-password" readOnly={this.state.disabled ? "" : "readonly"} type={isPasswordShown ? "text" : "password"} name="password" value={password} onInput={this.handleChange} />
                            <button onClick={toggleBtn} style={{marginLeft:'-50px', cursor:'pointer',border:'none', backgroundColor:'rgba(52, 52, 52, 0.0)',outline:'none', outlineColor:'rgba(52, 52, 52, 0.0)', outlineWidth:0}}>
                                {isPasswordShown ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                            </button>
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }

                        </div>

                    </div>
                    <div className={'form-group' + ((!this.state.disabled && this.state.submitted_code  && !submitted_code || this.state.wrongcode) ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} hidden={this.state.disabled || this.state.usernotfound} htmlFor="code">Code</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}}
                               className="form-control"
                               name="code"
                               value={code}
                               type = { (this.state.disabled || this.state.usernotfound) ? "hidden" : "text"}
                               onInput={this.handleChange} />
                        {submitted && !code && !this.state.disabled &&
                            <div className="help-block">Code is required</div>
                        }
                        {submitted && this.state.wrongcode  &&
                            <div className="help-block">Code is wrong. Try again</div>
                        }
                    </div>

                    <div className="form-group text-center">
                        <button style={{fontSize:'20px', width:'100%'}} className="btn btn-primary" onClick={this.handleSubmitButton}>Login</button>
                        <br style={{fontSize:'24'}}></br>

                        <Link to="/register" style={{fontSize:'16px'}} className="btn btn-link " >Are you not registered? Register now</Link>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn, error, users } = state.authentication;
    return { loggingIn, error, users };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
    confirm: userActions.confirm
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };