import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomerListItem = ({name, editAction, delAction, urlPath, dni}) => {
    return (
        <div>
            <div className="customer-list-item">
                <div className="field"><Link to={`${dni}`} >{name}</Link></div>
                <div className="field"><Link to={`${dni}/edit`} >{editAction}</Link></div>
                <div className="field"><Link to={`${dni}/del`} >{delAction}</Link></div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;