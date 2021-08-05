import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from "./contexts/color";
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

function App() {
  return (
    // <ColorContext.Provider value={{ color: "blue" }}>
    //   <div>
    //     <ColorBox />
    //   </div>
    // </ColorContext.Provider>

    <ColorProvider value={{ color: "gray" }}>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;