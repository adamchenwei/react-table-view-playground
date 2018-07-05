import React from 'react';
import PropTypes from 'prop-types';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import HoverAppearField from '../HoverAppearField/index';

const TableViewer = (props) => {
  const {
    data,
    pages,
    loading,
    fetchData,
  } = props;

  return (
    <div>
      <ReactTable
        // Global style change
        style={{
          color: 'grey',
        }}
        columns={[
          {
            Header: () => <span>First Name (Customized)</span>,
            accessor: "firstName",
            Cell: row => (
              <HoverAppearField
                row={row}
              />
            )
          },
          {
            Header: "Last Name",
            id: "lastName",
            accessor: d => d.lastName
          },
          {
            Header: "Age",
            accessor: "age",
            minWidth: 400,
            Cell: row => (
              <div>
                <span>customized color text</span><br/>
                <span style={{
                  color: row.value % 2 ? 'green' : 'magenta',
                }}>{row.value}</span>
                <code>{JSON.stringify(row)}</code>
              </div>
            )
          }
        ]}
        manual // Forces table not to paginate or sort automatically, so we can handle it server-side
        data={data}
        pages={pages} // Display the total number of pages
        loading={loading} // Display the loading overlay when we need it
        onFetchData={fetchData} // Request new data when things change
        filterable
        defaultPageSize={10}
        className="-striped -highlight"

        //hover effect
        getTrProps={(state, rowInfo, column, instance) => {
          return {
            style: {
              fontWeight: 'bold',
            },
            onMouseEnter: (event) => {
              console.log('enter');
            }
          }
        }}
      />
    </div>
  );
};

TableViewer.propTypes = {
  data: PropTypes.any,
  pages: PropTypes.any,
  loading: PropTypes.any,
  fetchData: PropTypes.func,
};

export default TableViewer;