import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import ConnectedLayout from '../containers/ConnectedLayout';
import { LEAD_ITEMS_TITLE, LEAD_ITEMS_DEFAULT } from '../common/constants'


class DataProvider extends Component {

    _fetchElements = () => {
        this.props.fetchAllLeads();
    }

    componentDidMount() {
        this._fetchElements();
    }

    render() {
        const { leadsItems } = this.props;

        return (
            <ConnectedLayout
                data={leadsItems}
                placeholder={LEAD_ITEMS_DEFAULT}
                title={LEAD_ITEMS_TITLE}
                {...this}
            />
        );
    }
}

export default DataProvider;
