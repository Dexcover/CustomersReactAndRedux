import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions'

class HomeContainer extends Component {
    handleOnClick = () => {
        console.info("Ejecutado")
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div>
                <AppFrame
                header="Home"
                body={
                    <div>Esta es la pantalla inicial
                        <CustomerActions>
                            <button onClick={this.handleOnClick}>Listado de Clientes</button>
                        </CustomerActions>
                    </div>
                }></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);