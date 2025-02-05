import React from 'react';  
import ReactDOM from 'react-dom/client';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Container from './compositional-component/container.jsx';
// import App from './compositional-component/app.jsx';
// import TodoApp from './functional-component.jsx';
// import Map from './map'; 
// import TodoApp from './arrow-function.jsx';
// import Styling from './input-style.jsx';
// import DeskripsiProduk from './deskripsi.jsx';
// import Artikel from './artikel.jsx';
// import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container/>
    {/* <App/> */}
    {/* <TodoApp/>   */}
    {/* <Map/> */}
    {/* <Styling/> */}
    {/* <DeskripsiProduk/>  
    <Artikel/> */}
  </React.StrictMode>,
)
