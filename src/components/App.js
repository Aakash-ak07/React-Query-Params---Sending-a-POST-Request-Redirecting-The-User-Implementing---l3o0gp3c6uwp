import React from 'react'
import '../styles/App.css';

const App = () => {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");
  const name = query.get("name");
  const designation = query.get("designation");

  return(
    <div className="App">
      <div className="details">
        <p>Employee{id} named{name} works as{designation}</p>
      </div>
    </div>
  )
}

export default App;
