import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Define the rootReducer
const initialState = {
  // Define the initial state
};

const rootReducer = (state = initialState, action) => {
  // Define the reducer logic
  switch (action.type) {
    default:
      return state;
  }
};

// Create the store
const store = createStore(rootReducer);

console.log('store data', store);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);