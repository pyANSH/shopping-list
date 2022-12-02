import React from 'react';
import { useSelector } from 'react-redux';
import './App.css'
import List from './components/List';
function App() {
  const list = useSelector(state => state.list)
  console.warn(list)
  return (
    <div className="app">
      <List />
    </div>
  );
}

export default App;
