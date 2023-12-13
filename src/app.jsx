// imports
import './app.css';
import {Outlet}  from 'react-router-dom';

function App(){
    return (
        <div id='page-layout'>
            <Outlet/>
        </div>
    )
}