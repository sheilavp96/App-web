import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Nabvar/Navbar';
import Login from './Login/Login';
// import Otro from './Registro/todo';
import Registro from './Registro/Registro';
import Dashboard from './components/Dashboard/Dashboard';
import Ajustes from './components/Dashboard/Ajustes/Ajustes';

function App() {
    /* const [token, setToken] = useState();
    if (!token) {
        return <Login setToken={setToken} />;
    } */
    return (
        <Router>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/registro'>
                        <Registro />
                    </Route>
                    <Route path='/dashboard'>
                        <Dashboard />
                    </Route>
                    <Route path='/ajustes'>
                        <Ajustes />
                    </Route>

                    <Route path='/'>inicio</Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
