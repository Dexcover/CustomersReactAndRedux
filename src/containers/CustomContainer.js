import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/CustomerSelector';
import {Route} from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit'
import CustomerData from '../components/CustomerData';

class CustomContainer extends Component {
    handleSubmit = values => {
        console.info(JSON.stringify(values));
    }
    renderBody = ()=>(
        <Route path="/customers/:dni/edit"
        children={
            ({match})=>{
                const CustomerControl = match?CustomerEdit: CustomerData;
                return <CustomerControl {...this.props.customer} onSubmit={this.handleSubmit}></CustomerControl>
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
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});


export default connect(mapStateToProps, null)(CustomContainer);