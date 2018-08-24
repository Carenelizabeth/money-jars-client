import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../Input/input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import {createUser} from '../../actions'

const passwordLength = length({min: 7, max: 12});
const matchesPassword = matches('password');

export class RegistrationChild extends React.Component {
    onSubmit(values){
        const {username, password} = values;
        const user = {username, password};
        user.type = 'child';
        console.log(user);
        /*return this.props
            .dispatch(registerUser(username))
            .then(() => this.props.dispatch(addChild(username)));*/
    }

    render(){
        if(!this.props.show){
            return null;
        }
        return (
            <div className='child-form'>
                <h2>Register a Child Account</h2>
                
                <form  
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <Field
                        component={Input}
                        type="text"
                        label="Username"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field
                        component={Input}
                        type="password"
                        label="Password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <Field  
                        component={Input}
                        type="password"
                        label="Confirm Password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'child-registration',
    //onSubmitFail: (errors, dispatch) =>
        //dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationChild);
