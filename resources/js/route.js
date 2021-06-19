import { divide } from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Example from './pages/Example';
import Home from './pages/Home';
import PostEdit from './pages/PostEdit';

function App() {
    return (
        <div>
            <Switch>
                <Route path='/example' exact component={Example} />
                <Route path='/' exact component={Home} />
                <Route path='/post/edit/:id' exact component={PostEdit} />
            </Switch>
        </div>
    );
}

ReactDom.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'))