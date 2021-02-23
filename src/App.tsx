import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from './Row';
import { requests } from './request';
import { Nav } from './Nav';
import { Counter } from './Counter';
import { Counter2nd } from './containers/Counter2nd';

function App() {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      <Counter2nd></Counter2nd>
      <Counter></Counter>
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="feactDocumentMovies"
        fetchUrl={requests.feachTrending}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
