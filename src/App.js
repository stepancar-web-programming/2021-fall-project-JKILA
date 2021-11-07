
import logo2 from './letter-j.png';


import './App.css';
import './Elements.css';
import React  from 'react';

function App() {
  return (
    <div className = "App">
       <div className = "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">

        <p className="h5 my-0 me-md-auto fw-normal">
          <a className="h3 text-dark text-decoration-none" href="/">JKILA</a>
        </p>
        <nav className="my-2 my-md-0 me-md-3" >
            <a className="p-2 text-dark text-decoration-none" href="/groups" > Teams </a>
            <a className="p-2 text-dark text-decoration-none" href="/user" > People </a>
            <a className="p-2 text-dark text-decoration-none" href="/board" > Board </a>

            <a className="h5 p-2 text-decoration-none" href="/user/profile"></a>
        </nav>

        <a href="/login" className="btn btn-outline-primary ml-5 " >
            Sign In
        </a>
      </div>
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          <i>JKILA coming soon ...</i>
        </p>
        <a
          className="App-link"
          href="https://www.figma.com/file/3e2ZeVqKohY7AuNXr3ExDz/WEB-PROJECT?node-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
        >
          FIGMA UI
        </a>
      </header>
    </div>
  );
}

export default App;
