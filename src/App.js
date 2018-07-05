import React, { Component } from 'react';
import './App.css';
import TableViewer from './components/TableViewer';
import requestData from './service/requestData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pages: null,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: true });
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
    requestData(
      state.pageSize,
      state.page,
      state.sorted,
      state.filtered
    ).then(res => {
      // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
      this.setState({
        data: res.rows,
        pages: res.pages,
        loading: false
      });
    });
  }

  render() {
    /**
     * Features to test
     * - A: server side loading with config of pagination related params, sort (multi sort, how can it work in server side?), and filter
     * - B: custom row and field components with interaction per row based
     * - C: Using styled component to customize styles
     * - D: Support storybook
     * - E: Bulk Select /
     * - F: Responsive Content Control per cell
     * - G: Cell becomes editable field as a result of bulk edit
     * - Sort: each column sortable (? disable sort column if custom component?)
     * V Column: Customizable column title (adding columns to display more data)
     * - On hover of row, allow display of custom selection, and whole row custom style on hover
     * - In line editing per row, label become editable field
     */

    return (
      <div className="App">
        <p>
          <span>react-table</span>
          {/* <span>react-virtualized</span> */}
        </p>
        <div>
          <TableViewer
            data={this.state.data}
            pages={this.state.pages}
            loading={this.state.loading}
            fetchData={this.fetchData}
          />
        </div>
      </div>
    );
  }
}

export default App;
