import './css/userPage.css';
import "./App.css";
import {BrowserRouter, Route, Routes, Link, useParams, useLocation} from 'react-router-dom';

import AdminPanelEventPage from "./pages/AdminPanelEventPage";
import UserNavBar from "./pages/UserNavBar";
import UserLocation from "./pages/UserLocation"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/**
         * Login Pages
         */}

        {/**
         * Admin Pages
         */}
        <Route path="/" element={<AdminPanelEventPage />} />

        {/**
         * User Pages
         */}
        <Route path="/location" element=
          {
            <>
              <header><UserNavBar subPagePath="\"/></header>
              <main><UserLocation/></main>
            </>
          }/>

        <Route path='/location/:venueName' element={<>Hi</>}/>
        
        <Route path='/location/:favoriteVenue' element={<>Hi</>}/>
        {/*<Route path="*" element={<NoMatch/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
