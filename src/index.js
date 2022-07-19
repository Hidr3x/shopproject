import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let rerender = (props) => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App rerender={rerender}/>
);
}
rerender()


