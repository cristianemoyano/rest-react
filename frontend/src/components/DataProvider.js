import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { leadsColumns } from '../common/constants'

const TableHeader = ({loaded, length}) => {
    if (loaded) {
        return (
            <h2 className="subtitle">
                Showing <strong>{length} </strong> items
            </h2>
        );
    }
};

const handleChange = ({id}) => {
    const conf = {
        method: "DELETE",
        headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('api/lead/'+id+'/delete', conf).then(response => console.log(response));
};


const Layout = ({data, loaded, placeholder }) => {
    if (loaded) {
        let table = !data.length ? (
            <p>Nothing to show</p>
        ) : (
            <div className="column">
                <TableHeader
                    loaded={loaded}
                    length={data.length}
                />
                <DataTable
                    title="Message"
                    columns={leadsColumns}
                    data={data}
                    onRowClicked={handleChange}
                />
            </div>
        );

        return table;
    }
    return  (
        <p>{placeholder}</p>
    );
};


class DataProvider extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    };

    _fetchElements = () => {
        this.props.fetchAllLeads();
    }

    componentDidMount() {
        this._fetchElements();
    }

    render() {
        const { data, loaded, placeholder } = this.state;
        const { leadsItems } = this.props;

        return (
            <Layout
                data={leadsItems}
                loaded={true}
                placeholder={placeholder}
            />
        );
    }
}

export default DataProvider;
