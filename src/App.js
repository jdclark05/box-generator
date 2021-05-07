import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import BoxBuilder from './components/BoxBuilder';

function App() {
  const [boxes, setBoxes] = useState([]);

  // CALLING FORM FUNCTION TO ADD INPUT TO LIST
  const colorInput = ( newColor ) => {
    setBoxes( [...boxes, newColor] );
  }

  return (
    <div>
        <Form onNewColor={ colorInput } />
        <BoxBuilder color={ boxes } />
    </div>
  );
}

export default App;
