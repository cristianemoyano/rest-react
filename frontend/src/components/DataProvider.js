import React, { Component } from "react";
import PropTypes from "prop-types";
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
    {
    name: 'Message',
    selector: 'message',
  },
    {
    name: 'Created',
    selector: 'created_at',
  },
];

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
                    title="Messages"
                    columns={columns}
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

    componentDidMount() {
        fetch(this.props.endpoint)
            .then(response => {
                if (response.status !== 200) {
                    return this.setState({ placeholder: "Something went wrong" });
                }
                return response.json();
            })
        .then(data => this.setState({ data: data, loaded: true }));
    }

    componentDidUpdate() {
        fetch(this.props.endpoint)
            .then(response => {
                if (response.status !== 200) {
                    return this.setState({ placeholder: "Something went wrong" });
                }
                return response.json();
            })
        .then(data => this.setState({ data: data, loaded: true }));
    }

    render() {
        const { data, loaded, placeholder } = this.state;
        return (
            <Layout
                data={data}
                loaded={loaded}
                placeholder={placeholder}
            />
        );
    }
}

export default DataProvider;
