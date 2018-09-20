import React from 'react';
import config from '../../config';
import Button from '../Button/button';
import './request.css';
import { connect } from 'react-redux';

import ChooseBudget from '../ChooseBudget/choose-budget';
import {updateUserProfile} from '../../actions/index.actions';
import {Redirect} from 'react-router-dom';

export default class Request extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ynabUrl: `https://app.youneedabudget.com/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}&response_type=code&state=${this.props.user_id}`,
            declined: false,
            initiated: false,
        }

        this.getToken = this.getToken.bind(this);

    }


    getToken(){
        console.log('get token clicked')
        this.openYnabWindow(this.state.ynabUrl)
        this.setState({
            initiated: true,
        })
    }

    openYnabWindow(url) {
        console.log(url);
        const win = window.open(url, '_self');
        win.focus();
    }



    render(){
        console.log(this.props.ynabData)

        if(!this.props.budget_id && this.props.ynabData.data===null){
            return(
                <div className='new-user'>
                    <div className='ynab-option'>
                        <p className='auth-message'>If you would like to synch accounts, please authorize YNAB first.</p>
                            <Button
                                onClick={this.getToken}
                                className='ynab-button click'
                                type='button'
                            />
                    </div>
                    <div className='manual-budget-section'>
                        <p>Or you can choose to budget manually</p>
                        <Button
                            className='manual-budget-button click green'
                            label='Budget Manually'
                            onClick={this.props.budgetManually}
                        />
                    </div>
                </div>
            )

        }else if(this.props.ynabData.data.length > 0){
            console.log(this.props.ynabData.data.length)
            console.log(this.props.user_id)
             return(
                <div>
                    <ChooseBudget 
                    data={this.props.ynabData.data}
                    userId={this.props.user_id}
                    /> 
                </div>
            )
        }

        return null;
    }
}

