import React from 'react';
import H1 from './elements/H1';
import Button from './elements/Button';
import { ThemeProvider } from 'styled-components';

import './App.css';

const theme = {
  primary: 'teal',
  secondary: 'green',
  font: 'sans-serif'
};

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <div className="App">
        <H1>Terry Learning Styled-Components</H1>
        <Button
          // primary
        >Button</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
