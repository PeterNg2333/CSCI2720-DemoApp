import './css/userPage.css';
import "./App.css";
import {BrowserRouter, Route, Routes, Link, useParams, useLocation} from 'react-router-dom';
import AdminPanelEventPage from "./pages/AdminPanelEventPage";
import UserMainLocation from "./pages/_UserMainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** Login Pages*/}

        {/**Admin Pages*/}
        <Route path="/" element={<AdminPanelEventPage />} />

        {/** User Pages*/}
        <Route path="/location" element={<UserMainLocation/>}/>

        <Route path='/location/Events/:venueName' element={<>Hello world</>}/>
        
        <Route path='/location/Favorite_Venue' element={<>Hello world</>}/>

        {/**<Route path="*" element={<NoMatch/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
