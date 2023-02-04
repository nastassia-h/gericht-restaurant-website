import React from 'react';
import './styles/main.scss';
import { Navbar, About, Believe, Find, Footer, Gallery, Intro, Laures, SpecialMenu, Welcome } from './containers/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <SpecialMenu />
      <Intro />
      <Believe />
      <Laures />
      <Gallery />
      <Find />
      <Footer />
    </div>
  );
}

export default App;
