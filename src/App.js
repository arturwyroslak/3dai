```javascript
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import GenerateButton from './components/GenerateButton';
import ModelDisplay from './components/ModelDisplay';
import { getShapeParameters } from './utils/shapeParameters';
import './styles/App.css';

function App() {
  const [shapeDescription, setShapeDescription] = useState('');
  const [shapeParameters, setShapeParameters] = useState(null);

  const handleGenerate = async () => {
    const parameters = await getShapeParameters(shapeDescription);
    setShapeParameters(parameters);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI-Driven 3D Geometry Visualizer</h1>
      </header>
      <main>
        <TextInput 
          id="textInput" 
          value={shapeDescription} 
          onChange={(e) => setShapeDescription(e.target.value)} 
        />
        <GenerateButton 
          id="generateButton" 
          onClick={handleGenerate} 
        />
        <ModelDisplay 
          id="modelDisplay" 
          parameters={shapeParameters} 
        />
      </main>
    </div>
  );
}

export default App;
```