import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AviableCars from './aviablecars/AviableCars';
import Home from './home/Home';
import Favorite from './favorite/Favorite';
import NF from './NF';

 function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviable" element={<AviableCars />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NF />} />
      </Routes>
    </div>
  );
};
export default App;