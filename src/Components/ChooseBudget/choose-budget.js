import React from 'react';
import SelectInput from '../SelectInput/select-input';
import {Field, reduxForm} from 'redux-form';
import {updateUserProfile} from '../../actions/index.actions';


export class ChooseBudget extends React.Component {
    constructor(props){
        super(props);
    }

    onSubmit(values){
        console.log(values);
        this.props.dispatch(updateUserProfile(this.props.userId, values))
    }


    render(){

        return(
            <div className='choose-budget'>
                <h2> Now select a YNAB budget to use </h2>
                <form
                    className='choose-budget-form'
                    onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                    )}>
                    <Field
                        component={SelectInput}
                        type='text'
                        label='Budget'
                        name='budget_id'
                        options={this.props.data}
                    />
                    <button
                        type="submit">
                        Assign
                    </button>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'choose-budget'})(ChooseBudget);