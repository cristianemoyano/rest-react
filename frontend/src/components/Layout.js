import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import ConnectedForm from "../containers/ConnectedForm";
import { leadsColumns, LEAD_ITEMS_SHAPE } from '../common/constants'

const TableHeader = ({length}) => {
      return (
          <h2 className="subtitle">
              Showing <strong>{length} </strong> items
          </h2>
      );
};


class Layout extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(LEAD_ITEMS_SHAPE),
        placeholder: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    };

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
              {table}
              <ConnectedForm />
            </div>
        );
    }
}

export default Layout;
