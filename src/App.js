import React, { useState } from 'react';

import { connect } from 'react-redux';
import LoginComponent from './components/LoginComponent';
import DataMap from './components/DataMap';

const App = (props) => {
  const [regionData] = useState(props.regionData);
  return (
    <div>
      <center>
        {' '}
        <h3>
          Democratizing software developer salary info so you don't have too
        </h3>
      </center>
      <LoginComponent />
      <div className="datamap-outer-conainer">
        <DataMap regionData={regionData} />
        <div className="data"></div>
      </div>
    </div>
  );
};

// App.propTypes = {
//   regionData: React.propTypes.array.isRequired,
//   emptyRegions: React.propTypes.array.isRequired,
//   sortState: React.propTypes.object.isRequired,
// };

function sortCollection(collection, sortState) {
  switch (sortState.direction) {
    case 'ASC':
      return collection.sort(function (a, b) {
        if (a[sortState.key] > b[sortState.key]) return 1;
        if (a[sortState.key] < b[sortState.key]) return -1;
        return 0;
      });

    case 'DESC':
      return collection.sort(function (a, b) {
        if (a[sortState.key] > b[sortState.key]) return -1;
        if (a[sortState.key] < b[sortState.key]) return 1;
        return 0;
      });

    default:
      return collection;
  }
}

function alphabeticOrder(collection) {
  return collection.sort(function (a, b) {
    if (a.regionName > b.regionName) return 1;
    if (a.regionName < b.regionName) return -1;
    return 0;
  });
}

function mapStateToProps(state) {
  return {
    regionData: sortCollection(state.regionData, state.sortState),
    emptyRegions: alphabeticOrder(state.emptyRegions),
    sortState: state.sortState,
  };
}

export default connect(mapStateToProps)(App);
