// imports
import './app.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
function App() {
    return (
        <div id=''>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App;

