import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';

class NewCustomerContainer extends Component {

    handleSubmit = () => {

    }

    handleOnSubmitSiccess = () => {
        
    }

    handleOnBack = () =>(
        this.props.history.goBack()
    );

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSiccess}
        onBack={this.handleOnBack}></CustomerEdit>
    };
    render() {
        return (
            <div>
                <AppFrame
                 header={"Nuevo Cliente"}
                 body={this.renderBody()} ></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {

};

export default withRouter(connect(null, null)(NewCustomerContainer));