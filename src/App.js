import React, { useState } from 'react';
import './App.css';

function MyButton({ onClick }) {
  return <button onClick={onClick}>I'm a button</button>;
}

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Hello there.</p>
      <p>My name is Apisit Swasphon.</p>
    </div>
  );
}

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton onClick={() => setShowAboutMe(!showAboutMe)} />

      {showAboutMe && <AboutMe />}
    </div>
  );
}

export default App;