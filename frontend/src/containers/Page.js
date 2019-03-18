import React, {PureComponent} from 'react';
import ConnectedDataProvider from "../containers/ConnectedDataProvider";
import ConnectedForm from "../containers/ConnectedForm";

export default class AdminLeadsPage extends PureComponent {


    render() {

        return (
            <React.Fragment>
              <ConnectedDataProvider
                  {...this.props}
              />
            </React.Fragment>
        );
    }
}
