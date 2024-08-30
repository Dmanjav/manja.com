import React from 'react';
import './App.css';
import LayoutNavFoot from './layouts/layoutnavfoot';
import Cards from './components/cards';
import manjaBio from './assets/bio';

function App() {
    return (
        <div className='App'>
            <LayoutNavFoot>
                <h1>React 18 Alpha</h1>
                {
                    manjaBio.map((item) => {
                        // console.log(item);
                        return (
                            <Cards key={item.id} title={item.title} content={item.content} />
                        );
                    })
                }
            </LayoutNavFoot>
        </div>
    );
}

export default App;