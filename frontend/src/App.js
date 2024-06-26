import "./css/userPage.css";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import AdminPanelEventPage from "./pages/AdminPanelEventPage";
import UserNavBar from "./components/UserNavBar";
import { UserMainLocation, UserMainEvents,UserMainFavorite } from "./pages/_UserMainPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** Login Pages*/}
        <Route path="/" element={<LoginPage/>} />

        {/**Admin Pages*/}
        <Route path="/admin_event" element={<AdminPanelEventPage />} />

        {/** User Pages*/}
        <Route path="/location" element={<UserMainLocation />} />

        <Route path="/location/:venueName/Events" element={<UserMainEvents />}/>

        <Route path="/location/Favorite_Venue" element={<UserMainFavorite/>} />

        {/**<Route path="*" element={<NoMatch/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
