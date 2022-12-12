
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import AdminPanelEventPage from "./pages/AdminPanelEventPage";
import UserNavBar from "./pages/UserNavBar";

function App() {
    return (
      <BrowserRouter>
      <header>
        <UserNavBar/>
      </header>
      <Routes>
          <Route path="/" element={<AdminPanelEventPage/>}/>
          {/*<Route path="*" element={<NoMatch/>}/>*/}
      </Routes>
  </BrowserRouter>
    );
}

export default App;
