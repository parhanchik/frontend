import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers/history';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { userActions } from '../_actions';
import './style.css';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            email: '',
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
            <div>
            <img src={"src/resources/banklogo.png"}/>
            <div className="col-md-6 col-md-offset-3">
                <h2>Login To Profile</h2>

                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onInput={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <div>
                        <input className="password-field" type={isPasswordShown ? "text" : "password"} name="password" value={password} onInput={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                            <button onClick={toggleBtn}>
                                {isPasswordShown ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                            </button>
                        </div>

                    </div>
                    <div className={'form-group' + ((!this.state.disabled && this.state.submitted_code && !submitted_code) ? ' has-error' : '')}>
                        <label hidden={this.state.disabled} htmlFor="code">Code</label>
                        <input
                               className="form-control"
                               name="code"
                               value={code}
                               type = { (this.state.disabled) ? "hidden" : "text"}
                               onInput={this.handleChange} />
                        {submitted && !code &&
                            <div className="help-block">Code is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmitButton}>Login</button>

                        <Link to="/register" className="btn btn-link">Register</Link>
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