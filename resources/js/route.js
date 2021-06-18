import { divide } from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Example from './pages/Example';

function App() {
    return (
        <div>
            <Switch>
                <Route path='/example' exact component={Example} />
            </Switch>
        </div>
    );
}

ReactDom.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'))