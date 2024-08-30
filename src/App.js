import React from 'react';
import './App.css';
import LayoutNavFoot from './layouts/layoutnavfoot';
import Cards from './components/cards';
import manjaBio from './assets/bio';

function App() {
    return (
        <div className='App'>
            {/* <Navbar />
            <h1><center>React 18 Alpha</center></h1>
            <BasicButton>Click me</BasicButton> */}
            <LayoutNavFoot>
                <h1>React 18 Alpha</h1>
                {
                    manjaBio.map((item, index) => (
                        <Cards key={index} title={item.title} content={item.content} />
                    ))
                }
            </LayoutNavFoot>
        </div>
    );
}

export default App;