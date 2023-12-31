// imports
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
function App() {
    return (
        <div id='container-page'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App;

