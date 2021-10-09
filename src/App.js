import './App.css';
import { useState } from 'react';

import Header from './components/Header.jsx';
import ListAdd from './components/ListAdd.jsx';
import ShowList from './components/ShowList.jsx';

function App() {

  const [list, setList] = useState([])

  return (
    <div className="App">
      <Header />
      <ListAdd setList={setList} />
      <ShowList list={list} />
    </div>
  );
}

export default App;
