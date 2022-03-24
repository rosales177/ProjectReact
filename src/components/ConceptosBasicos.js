import React from 'react';
import Body from './body';
import Access from './access';
import Home from './home';
import Productdetails from './productDetails';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Conceptosbasicos = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/product/:id" children={<Productdetails/>} />
                    <Route exact path="/product">
                        <Body Npage={1}/>
                    </Route>
                    <Route exact path="/minicart">
                        <h2>Your Cart</h2>
                    </Route>
                    <Route path="/:estado" children={<Access/>} />
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    
                    {/* <Route exact path="/acerca" >
                        <h2>Acerca</h2>
                    </Route>
                    <Route exact path="/contacto" >
                        <h2>Contacto</h2>
                    </Route>                     */}
                </Switch>
            </Router>
        </div>
    );
}

export default Conceptosbasicos;
