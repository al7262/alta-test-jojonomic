import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'unistore/react';
import { store } from '../stores/MainStore';

import HomePage from '../pages/HomePage';
import AreaPage from '../pages/AreaPage';

const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/area" component={AreaPage}/>
                    <Route exact path="/area/:area" component={AreaPage}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;