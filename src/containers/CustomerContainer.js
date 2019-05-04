import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomerActions from '../components/CustomerActions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCustomers} from './../actions/FectchCustomerAction'
import { getCustomers } from '../selectors/CustomerSelector';



class CustomerContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }
    
    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customersEnd => (
        <div>
            <CustomersList 
            customers={customersEnd}
            urlPath={'customers/'}></CustomersList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame
                header={'Listado de clientes'}
                body={this.renderBody(this.props.customers)}></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomerContainer.defaultProps = {
    customers: []
}
const mapDispatchToProps = {fetchCustomers};

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));