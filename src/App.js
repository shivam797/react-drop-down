import React from 'react';
import Dropdown from './Dropdown';

function App() {
  const items = ['Select 1', 'Select 2', 'Select 3'];

  return (
    <div className="App">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
