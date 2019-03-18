import {connect} from 'react-redux';

import DataProvider from '../components/DataProvider';
import {
    fetchLead,
} from '../actions/leads';


const _mapStateToProps = ({updateSuccess, leadsItems}) => ({
    updateSuccess,
    leadsItems,
});

const _mapDispatchToProps = (dispatch) => ({
    fetchAllLeads: () => dispatch(fetchLead()),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(DataProvider);
