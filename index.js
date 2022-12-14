
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

/* for redux-thunk core */

// import App from './Reduxcore_thunk/app'
// import store from './Reduxcore_thunk/store';

/* for redux core */

// import {createStore} from 'redux'
// import reducer from './Reduxcore/reducer';
// const store=createStore(reducer)

/* for reduxtoolkit core */

// import { configureStore } from '@reduxjs/toolkit';
// import loginReducer from './Reduxtoolkit/reducer/loginReducer'

// import App from './CRUD Redux toolkit/app'
// import store from './CRUD Redux toolkit/store';
// import {fetchUsers} from './CRUD Redux toolkit/user_slice'
// import { Provider } from 'react-redux';

// import App from './Context_form/app'
// import App from './React_hook_useform/app'

// store.dispatch(fetchUsers())

// import App from './Form_custom_hook/app'

import { Provider } from 'react-redux';
import App from './GL_Assesment_3/app'
import store from './GL_Assesment_3/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 

<Provider store={store}>
    <App></App>
</Provider>
 
  {/* <App></App> */}
</>
 
);




