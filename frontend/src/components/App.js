import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../js-utils/redux';

import reducer from '../reducers/leads';
import ConnectedPage from '../containers/ConnectedPage';

export default class AdminLeads extends React.Component {
    constructor(props) {
        super(props);
        // creates a store w/ Redux logging defaulted in development environment
        // also adds `redux-thunk` middleware by default for async actions
        this._store = configureStore({
            reducer,
            initialState: {},
        });

    }

    render() {
        return (
            <Provider store={this._store} >
                <ConnectedPage {...this} />
            </Provider>
        );
    }
}
