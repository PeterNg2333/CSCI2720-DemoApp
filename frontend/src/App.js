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
import UserLocationMain from "./pages/UserLocationMainPage";
import { UserMainLocation, UserMainEvents } from "./pages/_UserMainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** Login Pages*/}

        {/**Admin Pages*/}
        <Route path="/" element={<AdminPanelEventPage />} />

        {/** User Pages*/}

        <Route path="/location" element={<UserMainLocation />} />

        <Route
          path="/location/:venueName/Events"
          element={<UserMainEvents />}
        />

        <Route path="/location/Favorite_Venue" element={<UserMainLocation />} />

        {/**<Route path="*" element={<NoMatch/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
