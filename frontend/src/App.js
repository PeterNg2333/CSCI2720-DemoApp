import './css/userPage.css';
import "./App.css";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import AdminPanelEventPage from "./pages/AdminPanelEventPage";
import UserNavBar from "./pages/UserNavBar";
import UserLocationMain from "./pages/UserLocationMainPage"

function App() {
  return (
    <BrowserRouter>
      <header>
        <UserNavBar />
      </header>
        <UserLocationMain/>
      <Routes>
        <Route path="/" element={<AdminPanelEventPage />} />
        {/*<Route path="*" element={<NoMatch/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
