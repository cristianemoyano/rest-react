import {connect} from 'react-redux';

import Page from './Page';

const _mapStateToProps = ({hasError}) => ({
    hasError,
});

export default connect(
    _mapStateToProps,
)(Page);
