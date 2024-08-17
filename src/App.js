import React from 'react';
import BasicButton from './components/button';
import './App.css';
import Navbar from './components/navbar';

function App() {
    return (
        <div>
            <Navbar />
            <h1><center>React 18 Alpha</center></h1>
            <BasicButton>Click me</BasicButton>
        </div>
    );
}

export default App;