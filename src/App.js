import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        Joseph Canning
      </div>
      <NavBar />
      <div className="App-body"></div>
    </div>
  );
}

function NavBar() {

  return (

    <div className="App-nav">
      <NavButton text="About Me" />
      <NavButton text="Programming"/>
      <NavButton text="Writing"/>
    </div>

  )

}

function NavButton({text}) {

  const [selected, setSelected] = useState(0);

  function handleClick() {
    setSelected(!selected);
  }

  return (

    <button className="App-nav-button" onClick={handleClick}>
      {text}
    </button>

  );

}

export default App;
