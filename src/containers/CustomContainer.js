import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/CustomerSelector';
import {Route} from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import {fetchCustomers} from './../actions/FectchCustomerAction';
import {updateCustomer} from './../actions/UpdateCustomerAction';

class CustomContainer extends Component {
    componentDidMount() {
        
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }
    
    handleSubmit = values => {
        console.info(JSON.stringify(values));
        const {id} = values;
        return this.props.updateCustomer(id, values);
    }

    handleOnBack = () =>(
        this.props.history.goBack()
    );

    handleOnSubmitSuccess = () => (this.props.history.goBack());

    renderBody = ()=>(
        <Route path="/customers/:dni/edit"
        children={
            ({match})=>{
               if(this.props.customer)
               { const CustomerControl = match?CustomerEdit: CustomerData;
                return <CustomerControl {...this.props.customer} 
                onSubmit={this.handleSubmit}
                onSubmitSuccess={this.handleOnSubmitSuccess}
                onBack={this.handleOnBack}></CustomerControl>
            }
            return null;
            }    
        }></Route>
    );
    
    render() {
        return (
            <div>
                <AppFrame
                header={`Cliente ${this.props.dni}`}
                body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}

CustomContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomer: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

const mapDispatchToProps =  {fetchCustomers, updateCustomer};

export default connect(mapStateToProps, mapDispatchToProps)(CustomContainer);