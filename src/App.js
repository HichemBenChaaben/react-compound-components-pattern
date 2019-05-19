import React from 'react';
import './App.css';
import Tabs from './Tabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Compound components using react context api </h1>
        <Tabs>
          <Tabs.Tab title="tab1 title">this is tab zero</Tabs.Tab>
          <Tabs.Tab title="tab2 title">tab 1</Tabs.Tab>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
