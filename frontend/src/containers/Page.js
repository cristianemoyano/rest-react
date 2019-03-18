import React, {PureComponent} from 'react';
import ConnectedDataProvider from "../containers/ConnectedDataProvider";
import ConnectedForm from "../containers/ConnectedForm";

export default class AdminLeadsPage extends PureComponent {


    render() {

        return (
            <React.Fragment>
              <ConnectedDataProvider
                  endpoint="api/leads/"
                  {...this.props}
              />
              <ConnectedForm endpoint="api/leads/" />
            </React.Fragment>
        );
    }
}
