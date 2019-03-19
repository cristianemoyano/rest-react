import {connect} from 'react-redux';

import Layout from '../components/Layout';
import {
    deleteLead,
} from '../actions/leads';


const _mapStateToProps = ({deleteSuccess, notification}) => ({
    deleteSuccess,
    notification,
});
const _mapDispatchToProps = (dispatch) => ({
    onClick: (leadId, params) => dispatch(deleteLead(leadId, params)),
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Layout);
