import Button from 'components/Button/Button';
import AppBar from 'layout/AppBar/AppBar';
import Footer from 'layout/Footer/Footer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h3 style={{ color: 'var(--primary-color)' }}>test</h3>
      <AppBar />
      <Footer />
      <Button variant="contained" />
    </div>
  );
}

export default App;
