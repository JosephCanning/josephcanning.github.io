import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">Joseph Canning</div>
      <SiteBody />
    </div>
  );
}

// The entire website body including the navigation bar and text/image content
function SiteBody() {

  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <>
      <div className="App-nav">
        <NavButton text="About Me" selected={selectIndex === 0} onSelect={() => setSelectIndex(0)} />
        <NavButton text="Programming" selected={selectIndex === 1} onSelect={() => setSelectIndex(1)} />
        <NavButton text="Writing" selected={selectIndex === 2} onSelect={() => setSelectIndex(2)} />
      </div>
      <SiteContent selectIndex={selectIndex} />
    </>
  );

}

// Button that, when clicked, selects section to view
function NavButton({text, selected, onSelect}) {

  return (
    <button className={selected ? "App-nav-button-select" : "App-nav-button"} onClick={onSelect}>
      {text}
    </button>
  );

}

// Displays relevant content for the selected site section
function SiteContent({selectIndex}) {

  if (selectIndex === 0) {
    return(<AboutMe />);
  } else if (selectIndex === 1) {
    return(<Programming />);
  } else if (selectIndex === 2) {
    return(<Writing />);
  } else {
    return(<AboutMe />);
  }

}

// The "About Me" section with personal info
function AboutMe() {

  return (
    <div className="App-body">
      <h2 className="App-body-heading">About Me</h2>
      <p className="App-body-para">I'm a programmer and a writer with a passion for technology currently living in Sylvania, Ohio. In 2021, I graduated from the University of Illinois Chicago with a bachelor's degree in computer science and a specialization in software engineering. I also attended the University of Wisconsin Parkside before transferring to my alma mater. Since graduating, I have also earned a certificate in technical writing from Clemson University's Center for Corporate Learning.</p>
      <p className="App-body-para">I possess a wide range of technical skills including development for the modern web, SQL database management, proficiency with numerous programming languages, and the use of software design patterns. Additionally, I am an adept communicator&mdash;both in writing and in speech. My past writing projects include user guides and recommendation reports. I am currently seeking job opportunities. If you'd like to get in touch, I'd love to talk! My contact information is at the bottom of this page.</p>
      <br></br>
      <hr className="App-divider"></hr>
      <br></br>
      <h2 className="App-body-heading">Links & Contact Info</h2>
      <a href="mailto:josephecanning@gmail.com">
        <p className="App-body-para"><b>Email:</b>&ensp;josephecanning@gmail.com</p>
      </a>
      <a href="tel:+18153839587">
        <p className="App-body-para"><b>Phone:</b>&ensp;(+1) 815-383-9587</p>
      </a>
      <a href="https://github.com/josephcanning">
        <p className="App-body-para"><b>GitHub:</b>&ensp;https://github.com/josephcanning</p>
      </a>
      <a href="https://www.linkedin.com/in/joseph-canning-488328225">
        <p className="App-body-para"><b>LinkedIn:</b>&ensp;https://www.linkedin.com/in/joseph-canning-488328225</p>
      </a>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );

}

// The "Programming" section, highlighting some programming projects
function Programming() {

  return (
    <div className="App-body">
      <h2 className="App-body-heading">Programming Work</h2>
      <p className="App-body-para">Working on it!</p>
    </div>
  );

}


// The "Writing" section, highlighting some writing projects
function Writing() {

  return (
    <div className="App-body">
      <h2 className="App-body-heading">Writing Work</h2>
      <p className="App-body-para">Working on it!</p>
    </div>
  );

}

export default App;
