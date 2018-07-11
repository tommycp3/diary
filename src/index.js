import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './routes/Header';

// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()
// redux store requires reducers which requires actions

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// provide the store to react

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/login" component={Login} exact={true} />
                </Switch>
            </div>

        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

