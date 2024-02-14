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

  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div className="App-nav">
      <NavButton text="About Me" selected={selectIndex === 0} onSelect={() => setSelectIndex(0)} />
      <NavButton text="Programming" selected={selectIndex === 1} onSelect={() => setSelectIndex(1)} />
      <NavButton text="Writing" selected={selectIndex === 2} onSelect={() => setSelectIndex(2)} />
    </div>
  )

}

function NavButton({text, selected, onSelect}) {

  return (

    <button className={selected ? "App-nav-button-select" : "App-nav-button"} onClick={onSelect}>
      {text}
    </button>

  );

}

export default App;
