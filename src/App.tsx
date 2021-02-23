import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from './Row';
import { requests } from './request';
import { Nav } from './Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
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
