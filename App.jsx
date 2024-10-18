import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => {
    return (
        <div>
            <h1>This is Title...</h1>
        </div>
    )
}

const App = () => {

    const name = 'Kalidass';
    return (
        <div>
        <Title />
        <h1>{name}</h1>
        <h1>App</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);




