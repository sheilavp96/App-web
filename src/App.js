import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Nabvar/Navbar';
import Login from './Login/Login';

import Registro from './Registro/Registro';
import Dashboard from './components/Dashboard/Dashboard';
import Ajustes from './components/Dashboard/Ajustes/Ajustes';
import Home from './Inicio/Home';
import PrivateRoute from './Route/PrivateRoute';

function App() {
    /* const [token, setToken] = useState();
    if (!token) {
        return <Login setToken={setToken} />;
    } */
    return (
        <Router>
            <Navbar />
            <div className='container-inicio'>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/registro'>
                        <Registro />
                    </Route>
                    <Route path='/dashboard'>
                        <Dashboard />
                        {/* <Redirect to='login' /> */}
                    </Route>
                    <Route path='/ajustes'>
                        {/* <Redirect to='login' /> */}
                        <Ajustes />
                    </Route>

                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
