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
        //this.props.logout();

        this.state = {
            username: '',
            password: '',
            code: '',
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

        if (!this.state.submitted)
        {
            this.setState({ submitted: true });
            this.setState({ disabled: false });
            const { username, password } = this.state;
            if (username && password) {
                this.props.login(username, password);
            }
        }
        else
        {
            this.setState({ submitted_code: true });
            const { username, password } = this.state;
            if (username && password && this.state.code) {
                this.props.confirm(username, password, this.state.code);
            }

        }
    }


    handleSubmit(e) {
        e.preventDefault();

        //if (!this.state.submitted)
        //{
        //this.setState({ submitted: true });
        //this.setState({ disabled: false });
        //const { username, password } = this.state;
        //if (username && password) {
        //    this.props.login(username, password);
        //}
        //}
        //else
        //{
        //    this.setState({ submitted_code: true });
        //    const { username, password } = this.state;
        //    if (username && password && this.state.code) {
        //        this.props.confirm(username, password, this.state.code);
        //    }

        //}
    }

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    render() {
        const { isPasswordShown } = this.state;
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
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')} style={{flex: '1', height:'100%'}} >
                        <label style={{fontSize:'16px'}} htmlFor="username" >Username</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}} autoComplete="off" type="email" required className="form-control" placeholder="user@gmail.com" name="username" value={username} onInput={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')} >
                        <label style={{fontSize:'16px'}} htmlFor="password">Password</label>
                        <div>
                        <input style={{fontSize:'20px',height:'300', padding:'13px 10px', width:'100%'}} className="password-field" autoComplete="new-password" type={isPasswordShown ? "text" : "password"} name="password" value={password} onInput={this.handleChange} />
                            <button onClick={toggleBtn} style={{marginLeft:'-50px', cursor:'pointer',border:'none', backgroundColor:'rgba(52, 52, 52, 0.0)',outline:'none', outlineColor:'rgba(52, 52, 52, 0.0)', outlineWidth:0}}>
                                {isPasswordShown ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                            </button>
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }

                        </div>

                    </div>
                    <div className={'form-group' + ((!this.state.disabled && this.state.submitted_code && !submitted_code) ? ' has-error' : '')}>
                        <label style={{fontSize:'16px'}} hidden={this.state.disabled} htmlFor="code">Code</label>
                        <input style={{fontSize:'20px',height:'400', padding:'25px 10px'}}
                               className="form-control"
                               name="code"
                               value={code}
                               type = { (this.state.disabled) ? "hidden" : "text"}
                               onInput={this.handleChange} />
                        {submitted && !code &&
                            <div className="help-block">Code is required</div>
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
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
    confirm: userActions.confirm
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };