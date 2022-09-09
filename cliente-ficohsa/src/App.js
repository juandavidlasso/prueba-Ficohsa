import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ItemSearch from './components/search-items/ItemSearch'
import ItemDetail from './components/details-tems/ItemDetail'
import ItemResult from './components/results-items/ItemResult'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <Router>
      <Header />

      <div className="container p-5">
        <Routes>
          <Route path='/' element={ <ItemSearch /> } />
          <Route path='/items/search=type/:id' element={ <ItemResult /> } />
          <Route path='/items/:id' element={ <ItemDetail /> } />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={6000}
          hideProgressBar={false}
        />
      </div>

    </Router>
  );
}

export default App;
