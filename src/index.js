import React from 'react';
import { render } from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk));

const root = document.getElementById('root');
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/events/new" element={<EventsNew />} />
        <Route exact path="/" element={<EventsIndex />} />
      </Routes>
    </BrowserRouter>
  </Provider>
, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
