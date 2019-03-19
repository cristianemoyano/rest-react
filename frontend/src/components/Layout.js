import React, { Component } from 'react';
import isEmpty from 'lodash';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import ConnectedForm from "../containers/ConnectedForm";
import ReactNotification from "react-notifications-component";
import {
  leadsColumns,
  LEAD_ITEMS_SHAPE,
  NOTIFICATION_MAP,
} from '../common/constants'

const TableHeader = ({length}) => {
      return (
          <h2 className="subtitle">
              Showing <strong>{length} </strong> items
          </h2>
      );
};


class Layout extends Component {

    constructor(props) {
        super(props);
        this.notificationDOMRef = React.createRef();
    }

    static propTypes = {
        data: PropTypes.arrayOf(LEAD_ITEMS_SHAPE),
        placeholder: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    };

    componentDidUpdate() {
        this._handleNotificationData();
    }

    _handleNotificationData = () => {
        const {
            notification,
        } = this.props;

        if (notification.show) {
              this._showNotification(notification);
        }
    }

    _showNotification = (notification) => {
      this.notificationDOMRef.current.addNotification({
        title: notification.title,
        message: notification.message,
        type: notification.type,
        insert: notification.insert,
        container: notification.container,
        dismiss: notification.dismiss,
        dismissable: notification.dismissable
      });
    }

    addNotification() {

    }

    handleChange = ({id}) => {
      const conf = {
          method: 'DELETE',
          headers: new Headers({ "Content-Type": "application/json" })
      };

      this.props.onClick(id, conf);
    };


    render() {
        const { data, placeholder, title } = this.props;
        let table = !data.length ? (
            <p>{placeholder}</p>
        ) : (
            <div>
                <TableHeader
                    length={data.length}
                />
                <DataTable
                    title={title}
                    columns={leadsColumns}
                    data={data}
                    onRowClicked={this.handleChange.bind(this)}
                />
            </div>
        );

        return (
            <div className="column">
              <ReactNotification
                ref={this.notificationDOMRef}
                types={NOTIFICATION_MAP}
              />
              {table}
              <ConnectedForm />
            </div>
        );
    }
}

export default Layout;
