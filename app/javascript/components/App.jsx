import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../store/store';
import { Provider } from 'react-redux';
import Greeting from './Greeting.jsx';

const App = () => {
  return(
     <Provider store={store}>
       <Router>
         <Routes>
            <Route path='/' element={<Greeting />}></Route>
         </Routes>
       </Router>
     </Provider>
  )
}

export default App