import {connect} from 'react-redux';
import {flowRight} from 'lodash';

import Form from '../components/Form';
import {
    updateLead
} from '../actions/leads';

const _mapStateToProps = ({updateSuccess}) => ({
    updateSuccess,
});

const _mapDispatchToProps = (dispatch) => ({
    onSubmit: (params) => dispatch(updateLead(params)),
});

const withHoc = flowRight([
    connect(
        _mapStateToProps,
        _mapDispatchToProps,
    ),
]);

export default withHoc(Form);


